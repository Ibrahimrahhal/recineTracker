import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { css, StyleSheet } from 'aphrodite';
import config from '../config';
import { RadioButtonChecked, RadioButtonUnchecked, AddCircle, RemoveCircle} from '@material-ui/icons';
import NgIf from './NgIf';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '../baseComponents/Button';
import { getReportArrests, getReportClass, getReportCitations, saveReportClass, saveReportArrests, saveReportCitations} from '../services/http'
import UserContext from '../services/userContext';
import { toast } from 'react-toastify';

class checkboxCustom extends Component {
    static contextType = UserContext;

    ApiCallType = {
        getReportArrests,
        getReportClass,
        getReportCitations, 
        saveReportClass,
        saveReportArrests,
        saveReportCitations
    }
    constructor(props) {
        super(props);
        this.state = { 
            loading:true,
            checkedArray:[],
            group:{}
        }
    }
    componentDidMount(){
        window["check"] = this;
        this.ApiCallType['getReport'+this.props.type](this.context.activeShift.ShiftID, this.context.user).then((result)=>{
            if(this.props.type == 'Class')
                this.setState({...this.state, checkedArray:result, loading:false})
            else
            this.setState({...this.state, group:result, loading:false})
        });
        if(this.props.initialValue)
        this.setState({...this.state, group:this.props.initialValue});
    }
    isChecked= (value)=>{
    
        return this.state.checkedArray.includes(value);
    }
    add(value){
        if(this.state.group[value])
        this.state.group[value]++;
        else
        this.state.group[value] = 1
        this.setState(this.state);
    }

    remove(value){
        this.state.group[value]--;
        this.setState(this.state);
    }
    click(value){
    
        if(this.state.checkedArray.includes(value)){
            this.setState({...this.state, checkedArray:this.state.checkedArray.filter((invalue)=>{
            return invalue != value;
            })});
        }else {
            let arr = JSON.parse(JSON.stringify(this.state.checkedArray));
            arr.push(value)
            this.setState({...this.state, checkedArray:arr})
        }
    }

    save = ()=>{
        this.setState({...this.state, saving:true});
        this.ApiCallType['saveReport'+this.props.type](this.context.activeShift.ShiftID, this.props.type == 'Class' ? this.state.checkedArray : this.state.group ,this.context.user).then(()=>{
            this.props.close();
            toast.success("Saved Successfully")
        }).catch((err)=>{
            this.props.close();
            toast.error("Something Went Wrong") 
        })

    }

    render() { 
        return ( 
            <>
            <PerfectScrollbar {...this.props}>
                <NgIf exp={!this.state.loading}>
                {this.props.options.map((option)=>{
                    return (
                    <div className={css(styles.oneCard)} onClick={()=>this.click(option.value)}>
                        <span>{this.props.type != "Class" ? (this.state.group[option.value] || 0) : ""} {option.label}</span>
                        <NgIf exp={this.props.type != 'Class'}>
                            <div>
                                <NgIf exp={ this.state.group[option.value] && this.state.group[option.value]> 0}>
                                    <RemoveCircle className={css(styles.checkedUnChecked)} onClick={()=>this.remove(option.value)}/>
                                </NgIf>
                                <AddCircle className={css(styles.checkedUnChecked)} onClick={()=>this.add(option.value)}/>
                            </div>    
                        </NgIf>
                        <NgIf exp={this.props.type == 'Class'}>
                            <NgIf exp={this.isChecked(option.value)}>
                                <RadioButtonChecked className={css(styles.checkedUnChecked)} onClick={()=>this.click(option.value)}/>
                            </NgIf>
                            <NgIf exp={!this.isChecked(option.value)}>
                                <RadioButtonUnchecked className={css(styles.checkedUnChecked)} onClick={()=>this.click(option.value)}/>
                            </NgIf>
                        </NgIf>
                    </div>
                    )
                })}
                </NgIf>
                <NgIf exp={this.state.loading}>
                <CircularProgress size={50} className={css(styles.loader)}/>
                </NgIf>
            </PerfectScrollbar> 
            <NgIf exp={!this.state.loading}>
            <Button long centered rounded onClick={this.save} loading={this.state.saving}> Save</Button>
            </NgIf>
            </>
            );
    }
}
 
export default checkboxCustom;



const styles = StyleSheet.create({
    oneCard:{
        padding:'1rem 1.5rem',
        border: ` solid 1.4px ${config.getMainColorWithOpacity(0.7)}`,
        borderRadius:'0.5rem',
        backgroundColor:'#fff',
        boxShadow: `0px 0px 13px -1px ${config.getMainColorWithOpacity(0.7)} `,
        margin:'1rem',
        display: 'flex',
        justifyContent:'space-between',
        cursor:'pointer',
        userSelect:'none'
    },
    checkedUnChecked:{
        height:'30px', 
        width:'30px',
        color:config.mainColor,
        margin:'0.25rem',
        opacity:0.7,
        transition:'all 0.3s',
        ':hover':{
            opacity:1
        }
    },
    loader:{
        color:config.mainColor,
        margin:'0 auto',
        marginTop:'7rem',
        display:'block'
    },
});