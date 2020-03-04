import { StyleSheet } from 'aphrodite';
import config from '../../../config';
const styles = StyleSheet.create({
    overViewContainer:{
        padding:'2rem 1rem',
    },
    lineBreak:{
        height:'1px',
        width:'80%',
        margin:'1rem auto',
        backgroundColor:config.mainColor,
        opacity:0.2
    },
    cardsContainer:{
        padding:'2rem 0.5rem'
    },
    firstLineOfCards:{
        display:'flex',
        justifyContent:'space-between'
    },
    lineBreakSecond:{
        height:'1px',
        width:'65%',
        margin:'2.2rem auto',
        backgroundColor:config.mainColor,
        opacity:0.2
    },
    SecondLineOfCards:{
        display:'flex',
        justifyContent:'center'
    },
    addMarginToCard:{
        margin:'0 1rem'
    }
});

export default styles;
