import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { StyleSheet, css } from 'aphrodite';
import config from '../config';

export default class ButtonCustom extends Component {
    componentDidMount(){
    }
    render() {
        const {className, type} = this.props
        return (
        <Button type={type} className={css(style.button,this.props.rounded && style.rounded, this.props.bold && style.bold, this.props.light && style.light, this.props.long && style.long, this.props.centered && style.centered, this.props.style) + ' ' + className} onClick={this.props.onClick} variant="contained" color="primary">
        {this.props.children}
        </Button>
        )
    }
}


const style = StyleSheet.create({
    button:{
        padding:'0.6rem 2rem',
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
    },
    light:{
        fontWeight:'light'
    },
    long:{
        padding:'0.6rem 3rem',
    },
    centered:{
        display:'block',
        marginRight:'auto',
        marginLeft:'auto'
    }
})