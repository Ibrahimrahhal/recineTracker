import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './callCard.stylesheet';
import Text from '../../../../baseComponents/Text';
import NgIf from '../../../../baseComponents/NgIf';
import Input from '../../../../baseComponents/Input';
import Form from '../../../../baseComponents/Form';
import Button from '../../../../baseComponents/Button';
import { getDomain } from '../../../../services/data';
import { saveCall, deleteCall } from '../../../../services/http';
import UserContext from '../../../../services/userContext';
import { toast } from 'react-toastify';

class callCard extends Component {
    static contextType = UserContext;

    state={
        callType:[],
        ds:[],
        savingCall:false
    }
    componentDidMount(){
        this.setState({...this.state, callType: getDomain('TypeOfCall'), ds: getDomain('D&SI')})
        window["callCard"] = this; 
    }
    openEdit=()=>{
        this.props.openEdit(this.props.call.ID);
    }
    closeEdit=()=>{
        if(this.state.savingCall)
        toast.error("Please Wait To Finish Saving");
        this.props.openEdit(null);
    }


    getTypeFromValue(val){
        this.state.callType.find((single) =>{
            if(single.value == val)
            return single.label;
        })
    }
    savecall = (values)=>{
        this.setState({...this.state, savingCall: true});
        values.CallID = values.ID
        saveCall(values, this.context.user).then((result)=>{
            toast.success("Call Has Been Saved !");
            this.setState({...this.state, savingCall: false});
            this.closeEdit();
            this.props.refresh();
        }).catch((res)=>{
            toast.error("Something Went Wrong")
        });
    }

    deleteCall = ()=>{
        deleteCall(this.props.call.ID, this.context.user).then((res)=>{
            this.props.refresh()
            toast.success("Saved Successfully")
        })
    }
    render() {
        return (
            
            <div className={css(styles.cardContainer, this.props.edit && styles.cardContainerEditMode)} onClick={this.openEdit}>
                <NgIf exp={!this.props.edit}>
                    <Text Type={'h6'} Weight={"bold"} Color={'darker'} className={css(styles.textLocation)}>
                        {this.props.call.Location}
                    </Text>
                    <Text Type={'small'} Color={'darker'} className={css(styles.secondLine)}>
                        <Text Type={"span"}  Weight={"bold"} Color={'darker'}>
                        {this.getTypeFromValue(this.props.call.CallType)}
                        </Text>
                        <Text Type={"span"}  Weight={"light"} Color={'darker'}> From {this.props.call.StartTime} to {this.props.call.EndTime}</Text>
                    </Text>
                    <div className={css(styles.circleForType)}>
                         <Text Type={"div"}  Weight={"bold"} Color={'White'}> {this.props.call.Type == 1 ? 'D' : 'SI'}</Text>
                    </div>
                </NgIf>

                <NgIf exp={this.props.edit}>
                    <Form formProps={{initialValues :this.props.call, onSubmit:this.savecall}}>
                        <div className={css(styles.editContainer)}>
                            <div className={css(styles.editFirstCol)}>
                                <div className={css(styles.flexGrowTwo)}>
                                    <Input type="textarea" name="Location" label="location"/>
                                </div>
                                <div className={css(styles.flexGrowOne,styles.marginTopOne)}>
                                    <div className={css(styles.displayFlex)}>
                                        <div className={css(styles.flexGrowOne,styles.marginRightQ)}>
                                        <Input type="text" name="ComplNo" label="Compl. No"/>
                                        </div>
                                        <div className={css(styles.flexGrowOne, styles.marginLeftQ)}>
                                        <Input type="time" name="StartTime" label="Start Time"/>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            <div className={css(styles.editSecondCol)}>
                                <div className={css(styles.flexGrowOne)}>
                                    <Input 
                                    type="radio" 
                                    name="Type" 
                                    label="Dispatched - Self Initiated" 
                                    options={this.state.ds}/>
                                </div>
                                <div className={css(styles.flexGrowOne)}>
                                    <div className={css(styles.paddingTop)}>
                                    <Input type="select" name="CallType" options={this.state.callType} label="Type Of Call"/>
                                    </div>
                                </div>
                                <div className={css(styles.flexGrowOne, styles.marginTopOne)}>
                                    <Input type="time" name="EndTime" label="End Time"/>
                                </div>
                            </div>
                            <div className={css(styles.editSecondCol)}>
                            <Button rounded outline bold noShadow className={css(styles.small)} onClick={()=>this.props.openDialog('Class')} ><Text Type={"small"} Weight={"bold"}>Shift Classification</Text></Button>
                            <Button rounded outline bold noShadow className={css(styles.marginTopHalf,styles.small)} onClick={()=>this.props.openDialog('Arrests')}><Text Type={"small"} Weight={"bold"}>Shift Arrests</Text></Button>
                            <Button rounded outline bold noShadow className={css(styles.marginTopHalf,styles.small)} onClick={()=>this.props.openDialog('Citations')}><Text Type={"small"} Weight={"bold"}>Shift Ciitations</Text></Button>
                            <Button rounded outline bold noShadow className={css(styles.marginTopHalf,styles.small)} type={"submit"} loading={this.state.savingCall}><Text Type={"small"} Weight={"bold"} >Save</Text></Button>
                            <Button rounded outline bold noShadow className={css(styles.marginTopHalf,styles.small)} onClick={()=>this.closeEdit()}><Text Type={"small"} Weight={"bold"}>Close</Text></Button>
                            </div>
                        </div>
                        <NgIf exp={this.props.call.ID != -1}>
                        <Text Type={"small"} stylesheet={styles.deleteBtn} Weight={"bold"} onClick={this.deleteCall}>Delete This Call</Text>
                        </NgIf>
                    </Form>
                    <div>
                    </div>
                </NgIf>
            </div>
            
        );
    }

}

export default callCard;