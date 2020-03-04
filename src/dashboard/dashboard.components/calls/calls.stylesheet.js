import { StyleSheet } from 'aphrodite';
import config from '../../../config';
const styles = StyleSheet.create({
    callsContainer:{
     padding:'2rem 1rem'
    },
    lineBreak:{
        height:'1px',
        width:'80%',
        margin:'1rem auto',
        backgroundColor:config.mainColor,
        opacity:0.2
    },
    addBtnContainer:{
        width:'80%',
        margin:'1rem auto',
        display:'flex',
        justifyContent:'flex-end'
    },
    callsContainer:{
        width:'85%',
        margin:'1.9rem auto',
    },
});

export default styles;