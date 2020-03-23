import React, { Component } from 'react';
import { css } from 'aphrodite';
import Input from '../../../baseComponents/Input';
import Form from '../../../baseComponents/Form';
import Text from '../../../baseComponents/Text';
import Button from '../../../baseComponents/Button';
import PerfectScrollbar from 'react-perfect-scrollbar'
import CallCard from './callCard/callCard';
import styles from './calls.stylesheet';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Checkbox from '../../../baseComponents/checkboxCustom';
import { getArrests, getClass, getCitations} from '../../../services/data';
import { getAllCallsByReportID } from '../../../services/http';
import UserContext from '../../../services/userContext';
import { toast } from 'react-toastify';
import NgIf from '../../../baseComponents/NgIf';
import CircularProgress from '@material-ui/core/CircularProgress';

class calls extends Component {
    static contextType = UserContext;

    state = { 
        isDialogOpen:false,
        dialogType:'',
        activeCall:null,
        loading:true,
        calls:[]
    }
    componentDidMount(){
        getAllCallsByReportID(this.context.activeShift.ShiftID, this.context.user).then((result)=>{
            this.setState({...this.state, calls:result.data.Result, loading:false});
        }).catch((re)=>{
            this.setState({...this.state, calls:[], loading:false});
        });
        window['cardCont'] = this;
    }
    openDialog = (type)=>{
        this.setState({...this.state, isDialogOpen:true, dialogType:type})
    }
    selectCall = (callId)=>{
        if(this.state.activeCall && callId && this.state.activeCall != callId)
        toast.error("Please Close The Opened Call So You Can Edit Another")
        if(!this.state.activeCall || !callId)
        this.setState({...this.state , activeCall: callId, calls: this.state.calls.filter((call)=>{
            return call.ID != -1;
        })});
        else if(!callId)
        this.setState({...this.state , calls: this.state.calls.filter((call)=>{
            return call.ID != -1;
        })})
    }

    newCall = ()=>{
        if(this.state.loading)
        toast.error("Please Wait Until Loading Is Finished");
        this.state.calls.push({
            ID : -1,
            ReportID : this.context.activeShift.ShiftID,
            Type : 1,
            CallType : 1,
            ComplNo : "0",
            StartTime : "10:00:00",
            EndTime : "18:00:00",
            Location : " "
        });
        this.state.activeCall = -1
        this.setState({...this.state})
    }
    refreshCall = ()=>{
        this.setState({...this.state, loading: true})
        getAllCallsByReportID(this.context.activeShift.ShiftID, this.context.user).then((result)=>{
            this.setState({...this.state, calls:result.data.Result, loading:false});
        }).catch(()=>{
            this.setState({...this.state, calls:[], loading:false});
        });
    }
    getDataFromType(type){
        let selected;
        switch(type){
            case 'Arrests':
                selected = getArrests();
                break;
            case 'Class':
                selected = getClass();
                break;
            case 'Citations':
                selected = getCitations();
                break;
            default:
                selected = [];
        }
        return selected.map((one)=>{
            return {
                label: one.Name,
                value: one.ID
            }
        });
    }
    render() {
        return (
            <>
            
            <div className={css(styles.callsContainer)}>
                <Text Type="h3" Color={'darker'} Weight={'bold'}>Active Shift's Calls</Text>
                <div className={css(styles.lineBreak)}></div>
                <div className={css(styles.addBtnContainer)}>
                    <Button long rounded onClick={this.newCall}><small>+ New Call</small></Button>
                </div>
                <NgIf exp={!this.state.loading}>
                    <NgIf exp={this.state.calls.length > 0}>
                        <PerfectScrollbar className={css(styles.scrolbars)}>
                        <div className={css(styles.callsContainer)}>
                            {this.state.calls.map((callObj)=>{
                                return <CallCard refresh={this.refreshCall} edit={this.state.activeCall == callObj.ID} call = {callObj} openDialog = {this.openDialog} openEdit={this.selectCall}></CallCard>
                            })}
                            
                        </div>
                        </PerfectScrollbar>
                    </NgIf>
                    <NgIf exp={this.state.calls.length == 0}>
                        <img src={`${process.env.PUBLIC_URL}/images/nocalls.svg`} className={css(styles.nocalls)}/>
                        <Text Type="h6" Color={'darker'} Weight={'bold'} Align={"center"}>No Calls Yet,
                        <div>
                        <Text Type="small" Color={'darker'} Weight={'light'}>You Can Add New Call By Clicking The New Call Button</Text>
                        </div>
                        </Text>
                    </NgIf>
                </NgIf>
            </div>
           
            <NgIf exp={this.state.loading}>
            <CircularProgress size={50} className={css(styles.loader)}/>
            </NgIf>
            <Dialog maxWidth={'lg'} open={this.state.isDialogOpen} aria-labelledby="form-dialog-title">
            <DialogContent className={css(styles.empEditDialogContainer)}>
                <Checkbox 
                style={{height:'45vh', width:'50vw', marginTop:'1rem', marginBottom:'1.3rem'}} 
                type={this.state.dialogType} 
                close = {()=>{this.setState({...this.state, isDialogOpen:false,})}}
                options ={this.getDataFromType(this.state.dialogType)}></Checkbox>
                <span className={css(styles.closeBtn)} onClick={()=>{this.setState({...this.state, isDialogOpen:false,})}}> Close</span>
            </DialogContent>
        </Dialog>
        </>
            );
    }
}

export default calls;