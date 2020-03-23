import React, { Component } from 'react';
import { css } from 'aphrodite';
import Button from '../../../baseComponents/Button';
import Text from '../../../baseComponents/Text';
import styles from './overview.stylesheet';
import Card from '../../../baseComponents/Card';
import UserContext from '../../../services/userContext';
class overview extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {  };
        window['overview'] =this.props;
    }

    convert(string){
        string = string.split(':');
        let total = parseInt(string[0]) * 60 + parseInt(string[1]);
        return total
    }
    render() {
        return (
            <div className={css(styles.overViewContainer)}>
                <Text Type="h3" Color={'darker'} Weight={'bold'}>Active Shift's Overview</Text>
                <div className={css(styles.lineBreak)}></div>
                <div className={css(styles.cardsContainer)}>
                    <div className={css(styles.firstLineOfCards)}>
                        <Card title={'Dispatched Calls'} number={this.context.activeShift.TotalDispatchedCalls}/>
                        <Card title={'Self-Initiated Calls'} number={this.context.activeShift.TotalSelfInitiatedCalls}/>
                        <Card title={'Dispatched Calls Duration'} number={this.convert(this.context.activeShift.TotalTimeCFS)}/>
                        <Card title={'Self-Initiated Duration'} number={this.convert(this.context.activeShift.TotalTimeSelfInitiated)}/>
                    </div>
                    <div className={css(styles.lineBreakSecond)}></div>
                    <div>

                    </div>
                    <div className={css(styles.SecondLineOfCards)}>
                    <Card title={'Total Calls'} className={css(styles.addMarginToCard)} number={this.context.activeShift.TotalCalls}/>
                    <Card title={'Arrests'} className={css(styles.addMarginToCard)} number={this.context.activeShift.TotalArrests}/>
                    <Card title={'Citations'} className={css(styles.addMarginToCard)} number={this.context.activeShift.TotalCitations}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default overview;