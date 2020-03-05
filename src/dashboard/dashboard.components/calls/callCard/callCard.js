import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './callCard.stylesheet';
import Text from '../../../../baseComponents/Text';
import NgIf from '../../../../baseComponents/NgIf';
import Input from '../../../../baseComponents/Input';
import Form from '../../../../baseComponents/Form';
import Button from '../../../../baseComponents/Button';



class callCard extends Component {
    state = { isEditModeActive:false }
    render() {
        return (
            
            <div className={css(styles.cardContainer, this.state.isEditModeActive && styles.cardContainerEditMode)} onClick={this.openEdit}>
                <NgIf exp={!this.state.isEditModeActive}>
                    <Text Type={'h6'} Weight={"bold"} Color={'darker'} className={css(styles.textLocation)}>
                        {this.props.location}
                    </Text>
                    <Text Type={'small'} Color={'darker'} className={css(styles.secondLine)}>
                        <Text Type={"span"}  Weight={"bold"} Color={'darker'}> Roll Call</Text>
                        <Text Type={"span"}  Weight={"light"} Color={'darker'}> From 1:00PM to 3:00PM hot six</Text>
                    </Text>
                    <div className={css(styles.circleForType)}>
                         <Text Type={"div"}  Weight={"bold"} Color={'White'}>S </Text>
                    </div>
                </NgIf>

                <NgIf exp={this.state.isEditModeActive}>
                    <Form formProps={{initialValues :{location:"", complNo:"", complNo2:"", typeOfCall:"" ,typeOfCall:""}}}>
                        <div className={css(styles.editContainer)}>
                            <div className={css(styles.editFirstCol)}>
                                <div className={css(styles.flexGrowTwo)}>
                                    <Input type="textarea" name="location" label="location"/>
                                </div>
                                <div className={css(styles.flexGrowOne,styles.marginTopOne)}>
                                    <div className={css(styles.displayFlex)}>
                                        <div className={css(styles.flexGrowOne,styles.marginRightQ)}>
                                        <Input type="text" name="complNo" label="Compl. No"/>
                                        </div>
                                        <div className={css(styles.flexGrowOne, styles.marginLeftQ)}>
                                        <Input type="time" name="startTime" label="Start Time"/>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            <div className={css(styles.editSecondCol)}>
                                <div className={css(styles.flexGrowOne)}>
                                    <Input type="text" name="complNo2" label="Compl. No"/>
                                </div>
                                <div className={css(styles.flexGrowOne)}>
                                    <Input type="text" name="typeOfCall" label="Type Of Call"/>
                                </div>
                                <div className={css(styles.flexGrowOne, styles.marginTopOne)}>
                                    <Input type="time" name="endTime" label="End Time"/>
                                </div>
                            </div>
                            <div className={css(styles.editSecondCol)}>
                            <Button rounded outline bold noShadow className={css(styles.small)} ><Text Type={"small"} Weight={"bold"}>Shift Classification</Text></Button>
                            <Button rounded outline bold noShadow className={css(styles.marginTopHalf,styles.small)} ><Text Type={"small"} Weight={"bold"}>Shift Arrests</Text></Button>
                            <Button rounded outline bold noShadow className={css(styles.marginTopHalf,styles.small)} ><Text Type={"small"} Weight={"bold"}>Shift Ciitations</Text></Button>

                            </div>
                        </div>
                    </Form>
                </NgIf>
            </div>
            
        );
    }
    openEdit = ()=>{
        if(!this.state.isEditModeActive)
        this.setState({...this.state,isEditModeActive:true})
    }
}

export default callCard;