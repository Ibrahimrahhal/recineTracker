import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './employee.card.stylesheet';
class employeeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={css(styles.cardContaier)} onClick={this.props.onClick}>
                <h6>{this.props.employee.EmpName}</h6>
            </div> 
                );
    }
}
 
export default employeeCard;