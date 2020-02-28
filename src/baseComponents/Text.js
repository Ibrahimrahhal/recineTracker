import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Config from '../config';

class Text extends Component {
    
    render() {
        const {Type, Weight, Cap, Style, ClassName, Align, Color} = this.props;
        return (
            <Type style={Style}  className={css(styles['text'], Weight && styles[Weight], Cap && styles['allCap'], Align && styles[Align], Color && styles['color'+Color] ) + " " + ClassName}>
                {this.props.children}
            </Type>
        );
    }
}
const styles =  StyleSheet.create({
    text:{
        fontFamily:'Open Sans',
        color:Config.mainColor
    },
    bold:{
        fontWeight:'bold'
    },
    light:{
        fontWeight:'light'
    },
    normal:{
        fontWeight:'normal'
    },
    allCap:{
        textTransform:'capitalize'
    },
    left:{
        textAlign:'left'
    },
    right:{
        textAlign:'right'
    },
    center:{
        textAlign:'center'
    },
    colormain:{
        color:Config.mainColor
    },
    colordarker:{
        color:Config.darker
    },
});

export default Text;