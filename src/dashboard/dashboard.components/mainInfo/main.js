import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './main.stylesheet';
import Input from '../../../baseComponents/Input';
import Text from '../../../baseComponents/Text';
import Form from '../../../baseComponents/Form';
import Button from '../../../baseComponents/Button';
import Checkbox from '../../../baseComponents/checkboxCustom';
import { getAllEmployees, getReportById, saveReport, deleteReport } from '../../../services/http';
import UserContext from '../../../services/userContext';
import NgIf from '../../../baseComponents/NgIf';
import { Widgets } from '@material-ui/icons';
import { toast } from 'react-toastify';

import CircularProgress from '@material-ui/core/CircularProgress';

class main extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = { 
            allEmp:[],
            report:[],
            initialValues:{},
            loading:true,
            saving:false

         };

    }
    componentDidMount(){
        getAllEmployees(this.context.user).then((result)=>{
            this.setState({...this.state, allEmp:result.data.Result.map((oneEmp)=>{
                return {
                    label: oneEmp.EmpName,
                    value: oneEmp.EmpID
                }
            })});
        });
        if(this.context.activeShift.ShiftID != -1)
        getReportById(this.context.activeShift.ShiftID, this.context.user).then((result)=>{
            this.setState({...this.state, initialValues:result.data.Result[0], loading:false});
        }).catch((err)=>{
            this.setState({...this.state, loading:false});
            toast.error("Something Went Wrong");
        });
        else
        this.setState({...this.state, loading:false, initialValues:{
            "ReportID" : -1,
            "ReportNo": "999",
            "ReportDate" : "2/24/2020",
            "StartTime":"10:30",
            "EndTime":"16:30",
            "EmpID1" : null,
            "EmpID2": this.context.user.ID,
            "Squad" : 0,
            "Assign": 0,
            "Fleet" : 0,
            "Milleage": 0,
            "Comments" : ""
        }});
        
        window["main"] = this;
    }

    onSubmit= (values)=>{
        this.setState({...this.state, saving:true});
        values.ReportID = this.context.activeShift.ShiftID;
        saveReport(values, this.context.user).then((res)=>{
        this.setState({...this.state, saving:false});
        if(this.context.activeShift.ShiftID == -1 )
        this.props.history.push(`../../shifts`)
        else
        this.props.history.push(`calls/`)
        })
        console.log(values)
    }

    deleteReport = ()=>{

        deleteReport(this.context.activeShift.ShiftID, this.context.user).then((res)=>{
        this.props.history.push('../../shifts');
        toast.success("Report Deleted Successfully")
        }).catch((err)=>{
            toast.error(err.response.data.Errors.Msg.toUpperCase())
        })
    }

    render() {
        return (
            <div className={css(styles.mainsContainer)}>
            <Text Type="h3" Color={'darker'} Weight={'bold'}>Active Shift's Main Info</Text>

            <div className={css(styles.lineBreak)}></div>
            <NgIf exp={this.state.loading}>
            <CircularProgress size={50} className={css(styles.loader)}/>
            </NgIf>
            <NgIf exp={!this.state.loading}>
            <div className={css(styles.formContainer)}>
                <Form formProps={{initialValues:this.state.initialValues, onSubmit:this.onSubmit}} >
                    <div className={css(styles.parent)}>
                        <Input className={css(styles.dateRow)} required name="ReportNo" type="text" label={"Shift No"}/>
                    </div>
                    <div className={css(styles.parent)}>
                        <Input className={css(styles.dateRow)} required name="ReportDate" type="date" label={"Shift Data"}/>
                    </div>
                    <div className={css(styles.parent, styles.parentTime)}>
                        <Input className={css(styles.timeRow)} name="StartTime" type="time" label={"Start Time"}/>
                        <Input className={css(styles.timeRow)} type="EndTime" label={"End Time"}/>
                    </div>
                    <div className={css(styles.parent)}>
                    <Input className={css(styles.nameRowLong)} type="select" options={this.state.allEmp} name="EmpID1" label={"First Person's Name"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="Squad" label={"Squad"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="Assign" label={"Assign"}/>
                    </div>
                    <div className={css(styles.parent)}>
                    <Input className={css(styles.nameRowLong)} type="select" options={this.state.allEmp} name="EmpID2" label={"Second Person's Name"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="Fleet" label={"Fleet"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="Milleage" label={"Milleage"}/>
                    </div>
                    <div className={css(styles.btnContainer)}>
                    <Button long rounded className={css(styles.btn)} type="submit" loading={this.state.saving}><small>Next</small></Button>
                    </div>
                </Form>
                <NgIf exp={this.context.activeShift.ShiftID != -1}>
                <Text Type={"small"} stylesheet={styles.deleteBtn} Weight={"bold"} onClick={this.deleteReport}>Delete This Shift</Text>
                
                </NgIf>
            </div>
            </NgIf>
            </div>

        );
    }
}

export default main;