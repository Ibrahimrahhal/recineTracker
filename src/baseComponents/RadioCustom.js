import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import config from '../config';
import { toast } from 'react-toastify';

export default class Radio extends Component {
     check(index){
         console.log(this.props.options[index].value);
         window["rad"] = this;
        if(this.props.onChange)
        this.props.onChange(this.props.options[index].value);
     }

    render(){

        return (
            <div className={css(styles.radioMainContainer)}>
                <label className={css(styles.radioLabel)}>
                {this.props.label}
                </label>
                <div className={css(styles.radioBtnsContainer)}> 
                    {this.props.options.map((option,index)=>{
                       return (<div className={css(styles.checkBtn, option.value == this.props.value ? styles.checked : null)} onClick={()=>this.check(index)}>
                        {option.label}
                        </div>)
                    })}

                </div>
            </div>
        )
    }
}


const styles =  StyleSheet.create({
    radioMainContainer:{

    },
    radioLabel:{
        display:'block'
    },
    radioBtnsContainer:{
        display:'flex',
        flexWrap:'wrap'
    },
    checkBtn:{
        height:'37px',
        width:'37px',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin: '0.5rem',
        color: config.black,
        backgroundColor: 'white',
        fontSize:'0.8rem',
        fontWeight:'bold',
        border: `solid 2px ${config.black}`,
        cursor:'pointer',
        userSelect:'none'
    },
    checked:{
        backgroundColor: config.black,
        color:'white',

    }
})