import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyleSheet, css } from 'aphrodite';
import config from '../config';

export default class ButtonCustom extends Component {
    componentDidMount(){
    }
    render() {
        const {className, type} = this.props
        return (
        <Button type={type} disabled={this.props.disabled} className={css(style.button,this.props.rounded && style.rounded, this.props.bold && style.bold, this.props.light && style.light, this.props.long && style.long, this.props.centered && style.centered, this.props.style, this.props.outline && style.outline, this.props.noShadow && style.noShadow) + ' ' + className} onClick={this.props.onClick} variant="contained" color="primary">
        {this.props.loading?<CircularProgress size={20} color={"#fff"}/>:this.props.children}
        </Button>
        )
    }
}


const style = StyleSheet.create({
    button:{
        padding:'0.8rem 0.25rem',
        backgroundColor: config.mainColor,
        color:config.whiteColor,
        borderStyle:'none',
        border:'none',
        outline:'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
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
        marginRight:'auto',
        marginLeft:'auto'
    },
    outline:{
        backgroundColor:'transparent !important',
        border:`solid 1.8px ${config.getMainColorWithOpacity(0.8)}`,
        color:config.mainColor
    },
    noShadow:{
        boxShadow:'none'
    }
})