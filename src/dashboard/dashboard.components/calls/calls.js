import React, { Component } from 'react';
import { css } from 'aphrodite';
import Input from '../../../baseComponents/Input';
import Form from '../../../baseComponents/Form';
import Text from '../../../baseComponents/Text';
import Button from '../../../baseComponents/Button';
import PerfectScrollbar from 'react-perfect-scrollbar'
import CallCard from './callCard/callCard';
import styles from './calls.stylesheet';
class calls extends Component {
    state = {  }
    render() {
        return (
            <div className={css(styles.callsContainer)}>
                <Text Type="h3" Color={'darker'} Weight={'bold'}>Active Shift's Calls</Text>
                <div className={css(styles.lineBreak)}></div>
                <div className={css(styles.addBtnContainer)}>
                    <Button long rounded><small>+ New Call</small></Button>
                </div>
                <PerfectScrollbar className={css(styles.scrolbars)}>
                    <div className={css(styles.callsContainer)}>
                        <CallCard location="454 454 das  Amman, Jordan Issa Marrar st.sad asdsadasdasd"></CallCard>
                        <CallCard location="454 454 das  Amman, Jordan Issa Marrar st.sad asdsadasdasd"></CallCard>
                        <CallCard location="454 454 das  Amman, Jordan Issa Marrar st.sad asdsadasdasd"></CallCard>
                    </div>
                </PerfectScrollbar>
            </div>
            );
    }
}

export default calls;