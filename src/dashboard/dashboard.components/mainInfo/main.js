import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './main.stylesheet';
import Input from '../../../baseComponents/Input';
import Text from '../../../baseComponents/Text';
import Form from '../../../baseComponents/Form';
import Button from '../../../baseComponents/Button';

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={css(styles.mainsContainer)}>
            <Text Type="h3" Color={'darker'} Weight={'bold'}>Active Shift's Main Info</Text>
            <div className={css(styles.lineBreak)}></div>

            <div className={css(styles.formContainer)}>
                <Form formProps={{initialValues:{person1:"",person2:"",squad1:"",squad2:"",assign1:"",assign2:""}}} onSubmit={this.onSubmit}>
                    <div className={css(styles.parent)}>
                        <Input className={css(styles.dateRow)} name="shiftDate" type="date" label={"Shift Data"}/>
                    </div>
                    <div className={css(styles.parent, styles.parentTime)}>
                        <Input className={css(styles.timeRow)} name="startTime" type="time" label={"Start Time"}/>
                        <Input className={css(styles.timeRow)} type="endTime" label={"End Time"}/>
                    </div>
                    <div className={css(styles.parent)}>
                    <Input className={css(styles.nameRowLong)} type="text" name="person1" label={"First Person's Name"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="squad1" label={"Squad"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="assign1" label={"Assign"}/>
                    </div>
                    <div className={css(styles.parent)}>
                    <Input className={css(styles.nameRowLong)} type="text" name="person2" label={"Second Person's Name"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="squad2" label={"Squad"}/>
                    <Input  className={css(styles.nameRowShort)} type="text" name="assign2" label={"Assign"}/>
                    </div>
                </Form>
            </div>
            <div className={css(styles.btnContainer)}>
                <Button long rounded className={css(styles.btn)}><small>Next</small></Button>
            </div>
            </div>

        );
    }
}

export default main;