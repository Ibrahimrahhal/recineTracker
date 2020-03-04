import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import Text from './Text';
import config from '../config';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={css(styles.cardContainer) + " "+ this.props.className}>
                <Text Type={'small'} Align={'center'} Weight={'bold'} className={css(styles.smallText)}>
                    {this.props.title}
                </Text>
                <Text Type={'h1'} Align={'center'} Weight={'bold'} className={css(styles.bigText)}>
                {this.props.number}
                </Text>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:'#fff',
        width:'18vw',
        maxWidth:'300px',
        minWidth:'200px',
        height:'13vh',
        maxHeight:'220px',
        minHeight:'150px',
        borderRadius:'0.5rem',
        padding:'0.7rem 0.4rem',
        boxShadow: `0px 3px 79px -34px ${config.getMainColorWithOpacity(0.55)}`,
        border: `solid 1px ${config.getMainColorWithOpacity(0.2)}`

    },
    smallText:{
        display:'block'
    },
    bigText:{
        fontSize:'5.5rem'
    }
});
export default Card;