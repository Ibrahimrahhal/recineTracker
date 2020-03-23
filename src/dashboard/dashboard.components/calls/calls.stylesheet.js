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
    scrolbars:{
        maxHeight:"65vh"
    },
    closeBtn:{
        display:'block',
        margin:'0.6rem auto',
        userSelect:'none',
        textAlign:'center'

    }, 
    loader:{
        color:config.mainColor,
        margin:'0 auto',
        marginTop:'9rem',
        display:'block'
    },
    nocalls:{
        width:'25vw',
        height:'auto',
        display:'block',
        margin:'0 auto',
        marginTop:'8rem'
    }
});

export default styles;