import { StyleSheet } from 'aphrodite';
import config from '../config';
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:config.whiteColor,
        minHeight:'100vh'
    },
    pageTitle:{
        textAlign:'center',
        paddingTop:'1rem',
        color:config.black
    },
    secTitle:{
        textAlign:'center',
        color:config.mainColor,
        paddingBottom:'1rem'
    },
    thinSep:{
        height: '1px',
        width: '80vw',
        margin: '0 auto',
        marginBottom: "3rem",
        backgroundColor: config.mainColor,
        opacity:0.5
    },
    loader:{
        color:config.mainColor,
        margin:'0 auto',
        marginTop:'2rem',
        display:'block'
    },
    logo:{
        display:'block',
        margin:'0 auto',
        paddingTop:'3rem',

    },
    empContainer:{
        display:"flex",
        justifyContent:'center',
        flexWrap:'wrap'
    },
    empEditDialogContainer:{
        minWidth:'50vw',
        minHeight:'50vh'
    },
    dialogInputsContainer:{
        display:'flex',
        alignItems:'center',
        margin:'1rem 0'
    },
    marginXInputs:{
        margin:'0 0.5rem'
    },
    marginTopForForm:{
        marginTop:'2rem'
    },
    dialogBtnsAction:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'2.2rem'
    },
    dialogBtns:{
        margin:'1rem 1rem'
    },
    deleteEmp:{
        color:'#da1f26',
        cursor:'pointer'
    },
    logout:{
        position: 'absolute',
        top:'14px',
        left:'14px',
        color:config.mainColor,
        height:'34px',
        transition:'all 0.3s',
        cursor:'pointer',
        ':hover':{
            transform:'scale(1.1)'
        }
    }

});

export default styles;