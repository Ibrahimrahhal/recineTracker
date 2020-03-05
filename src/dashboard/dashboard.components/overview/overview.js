import React, { Component } from 'react';
import { css } from 'aphrodite';
import Button from '../../../baseComponents/Button';
import Text from '../../../baseComponents/Text';
import styles from './overview.stylesheet';
import Card from '../../../baseComponents/Card';
class overview extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        window['overview'] =this.props;
    }
    render() {
        return (
            <div className={css(styles.overViewContainer)}>
                <Text Type="h3" Color={'darker'} Weight={'bold'}>Active Shift's Overview</Text>
                <div className={css(styles.lineBreak)}></div>
                <div className={css(styles.cardsContainer)}>
                    <div className={css(styles.firstLineOfCards)}>
                        <Card title={'Dispatched Calls'} number={32}/>
                        <Card title={'Self-Initiated Calls'} number={12}/>
                        <Card title={'Dispatched Calls Duration'} number={85}/>
                        <Card title={'Self-Initiated Duration'} number={47}/>
                    </div>
                    <div className={css(styles.lineBreakSecond)}></div>
                    <div>

                    </div>
                    <div className={css(styles.SecondLineOfCards)}>
                    <Card title={'Classifications'} className={css(styles.addMarginToCard)} number={8}/>
                    <Card title={'Arrests'} className={css(styles.addMarginToCard)} number={5}/>
                    <Card title={'Citations'} className={css(styles.addMarginToCard)} number={2}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default overview;