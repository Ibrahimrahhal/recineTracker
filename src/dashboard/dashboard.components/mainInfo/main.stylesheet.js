import { StyleSheet } from 'aphrodite';
import config from '../../../config';
const styles = StyleSheet.create({
    mainsContainer:{
     padding:'2rem 1rem'

    },
    formContainer:{
        width:"50vw",
        minWidth:"300px",
        minHeight:"300px",
        backgroundColor:'#fff',
        margin:"3rem auto",
        marginTop:"4rem",
        padding:'1rem',
        borderRadius:'1rem',
        border: `solid 1px ${config.getMainColorWithOpacity(0.5)}`,
        boxShadow: `0px 0px 44px -12px ${config.getMainColorWithOpacity(0.5)}`
    },
    lineBreak:{
        height:'1px',
        width:'80%',
        margin:'1rem auto',
        backgroundColor:config.mainColor,
        opacity:0.2
    },
    parent:{
        display:'flex',
        margin:'1rem 0'
    },
    parentTime:{
    justifyContent:'space-between'
    },
    dateRow:{
        margin:'0 0.5rem',
        flex:1
    },
    timeRow:{
        flex:1,
        flexGrow:1,
        margin:'0 0.5rem'
    },
    nameRowLong:{
        flex:3,
        margin:'0 0.5rem'
    },
    nameRowShort:{
        flex:1,
        margin:'0 0.5rem'  
    },
    btn:{
        position:'fixed',
        bottom:'1rem',
        right:'1rem'
    },
    loader:{
        color:config.mainColor,
        margin:'0 auto',
        marginTop:'9rem',
        display:'block'
    },
    deleteBtn:{
        color:'#da1f26',
        display:'block',
        marginBottom:'1rem',
        marginLeft:'0.7rem',
        cursor:'pointer'
        },
});

export default styles;