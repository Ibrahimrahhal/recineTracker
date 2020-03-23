import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { css } from 'aphrodite';
import styles from './employee.stylesheet';
import config from '../config'
import { getAllEmployees } from '../services/http';
import UserContext from '../services/userContext';
import NgIf from '../baseComponents/NgIf';
import EmployeeCard from './employee.card/employee.card';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from '../baseComponents/Form';
import Input from '../baseComponents/Input';
import Button from '../baseComponents/Button';
import Text from '../baseComponents/Text';
import { saveEmployee, deleteUser } from '../services/http';
import { toast } from 'react-toastify';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class employee extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {  
            employees:[],
            loading:true,
            selectedEmp:null,
            dialogLoading:false
        }
    }

    employeeSelect(emp){
        if(emp.EmpID != -1)
        this.setState({...this.state, selectedEmp:emp});
        else
        this.setState({...this.state, selectedEmp: {
            EmpID: -1,
            EmpName: "",
            EmpNo: "",
            UserName: "",
            Password: "",
            Mobile: "",
            Email: "",
            Address: "",
            Status: 1,
            IsAdmin: 0
        }});

    }

    componentDidMount(){
        getAllEmployees(this.context.user).then((result)=>{
            console.log(result.data.Result,"emp");
            this.setState({...this.state, employees:result.data.Result , loading:false});
        });
    }

    fixValues(selectedEmp){
        if(!selectedEmp)
        return selectedEmp;
        let clone = JSON.parse(JSON.stringify(selectedEmp));
        clone.IsAdmin = clone.IsAdmin == 1 ;
        return clone;
    }

    refreashList(){
        this.setState({...this.state, loading:true});
        getAllEmployees(this.context.user).then((result)=>{
            this.setState({...this.state, employees:result.data.Result , loading:false});
        });
    }

    deleteEmp = ()=>{
        if(this.state.dialogLoading)
        return;
        this.setState({...this.state, dialogLoading:true})
        deleteUser(this.state.selectedEmp.EmpID, this.context.user).then((res)=>{
            toast.success("Employee Was Deleted Successfully");
            this.setState({...this.state, dialogLoading:false, selectedEmp:null})
            this.refreashList();
        }).catch((err,x)=>{
            toast.error(err.response.data.Errors.Msg);
            console.log(err.response,x)
            this.setState({...this.state, dialogLoading:false, selectedEmp:null})
            this.refreashList();
        })
    }

    formSubmit = (values)=>{
        values.IsAdmin = values.IsAdmin ? 1 : 0;
        values.Password = values.EmpID != -1 ? -1 : values.Password;
        this.setState({...this.state, dialogLoading:true})
        saveEmployee(values, this.context.user).then((result)=>{
        toast.success("Employee Was Updated Successfully");
        this.setState({...this.state, dialogLoading:false, selectedEmp:null})
        this.refreashList();
        }).catch((err)=>{
            toast.err("Something Went Wrong")
            this.setState({...this.state, dialogLoading:false, selectedEmp:null})
            this.refreashList();
        });
    }

    render() { 
        const { loading, selectedEmp, dialogLoading } = this.state;
        return (

            <>
            <ExitToAppIcon className={css(styles.logout)} onClick={()=>{window.location.href = window.location.origin}}/>
            <div className={css(styles.mainContainer)}>
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" width='65px' height="auto" className={css(styles.logo)}></img>
                <h3 className={css(styles.pageTitle)}> Employees Admin Page</h3>
                <h6 className={css(styles.secTitle)}>Add, Edit & Manage Your Employees</h6>
                <div className={css(styles.thinSep)}>
                </div>
                <NgIf exp={loading}>
                    <CircularProgress size={50} className={css(styles.loader)}/>
                </NgIf>
                <NgIf exp={!loading}>
                    <div className={css(styles.empContainer)}>
                        {this.state.employees.map((oneEmp)=>{
                            return <EmployeeCard employee={oneEmp} onClick={()=>this.employeeSelect(oneEmp)}/>
                        })}
                    <EmployeeCard employee={{EmpName: '+', EmpID: -1}} onClick={()=>this.employeeSelect({EmpName: '+', EmpID: -1})} />
                    </div>
                </NgIf>
            </div> 
            <Dialog maxWidth={'lg'} open={selectedEmp} aria-labelledby="form-dialog-title">
                <DialogContent className={css(styles.empEditDialogContainer)}>
                    <h6>Edit Employee</h6>
                    <Form className={css(styles.marginTopForForm)} formProps={{initialValues:this.fixValues(selectedEmp), onSubmit:this.formSubmit}}>
                        <div className={css(styles.dialogInputsContainer)}>
                        <Input type={"text"} name={"EmpName"} className={css(styles.marginXInputs)} label={"Employee Name"} disabled={dialogLoading}/>
                        <Input type={"text"} name={"UserName"} className={css(styles.marginXInputs)} label={"Employee Username"} disabled={dialogLoading}/>
                        </div>
                        <div className={css(styles.dialogInputsContainer)}>
                        <Input type={"text"} name={"Mobile"} className={css(styles.marginXInputs)} label={"Employee Mobile"} disabled={dialogLoading}/>
                        <Input type={"text"} name={"EmpNo"} className={css(styles.marginXInputs)} label={"Employee Number"} disabled={dialogLoading}/>
                        </div>
                        <div className={css(styles.dialogInputsContainer)}>
                        <Input type={"text"} name={"Address"} className={css(styles.marginXInputs)} label={"Employee Address"} disabled={dialogLoading}/>
                        <NgIf exp={selectedEmp && selectedEmp.EmpID == -1}>
                        <Input type={"password"} name={"Password"} className={css(styles.marginXInputs)} label={"Employee Password"} disabled={dialogLoading}/>
                        </NgIf>
                        </div>
                        <div className={css(styles.dialogInputsContainer)}>
                        <Input type={"text"} name={"Email"} className={css(styles.marginXInputs)} label={"Employee Email"} disabled={dialogLoading}/>
                        </div>
                        <div className={css(styles.dialogInputsContainer)}>
                        <Input type={"checkbox"} name={"IsAdmin"} label={"Give Employee Admin Access"} disabled={dialogLoading}/>
                        </div> 
                        <div className={css(styles.dialogInputsContainer)}>
                        <Text Type={"small"} stylesheet ={styles.deleteEmp} onClick={this.deleteEmp}> Delete This Employee</Text>
                        </div>     
                        <div className={css(styles.dialogBtnsAction)}>
                            <NgIf exp={!dialogLoading}>
                            <Button long rounded outline disabled={dialogLoading} className={css(styles.dialogBtns)} onClick={
                                ()=>this.setState({...this.state, selectedEmp:null})
                            }>Close</Button>
                            </NgIf>
                            <Button long rounded  className={css(styles.dialogBtns)} type="submit" disabled={dialogLoading} loading={dialogLoading}>Save</Button>

                        </div>                 
                    </Form>
                </DialogContent>
            </Dialog>
            </>
            );
    }
}
 
export default employee;