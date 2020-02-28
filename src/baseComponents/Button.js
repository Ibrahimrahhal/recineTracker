import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import config from '../config';

export default class Button extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <button className={css(style.button,this.props.rounded && style.rounded, this.props.bold && style.bold, this.props.style)} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}


const style = StyleSheet.create({
    button:{
        padding:'0.4rem 1.4rem',
        backgroundColor: config.mainColor,
        color:config.whiteColor,
        borderStyle:'none',
        border:'none',
        outline:'none',
    },
    rounded:{
        borderRadius:'3rem'
    },
    bold:{
        fontWeight:'bold'
    }
})