import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    loginMainWrapper:{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        position: 'relative'
    },
    backgroundImage:{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundImage:`url(${process.env.PUBLIC_URL}/images/loginStock.png)`,
        zIndex:-1
    },
    loginContent:{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex:0,
        backgroundColor:'rgba(0,0,0,0.6)',
        display:'flex',
        alignItems:'center'
    },
    darkBackground:{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: '2',
        background: '#000000',
        opacity: '0.8'
    },
    stockImage:{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: '1',
        backgroundImage: 'url(/images/loginStock.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center'
    },
    formContainer:{
        width:'30vw',
        minWidth:'350px',
        backgroundColor:"#fff",
        boxShadow:'0px 1px 59px 0px rgba(175,126,47,0.3)',
        borderRadius:'1rem',
        height:'80vh',
        marginLeft:'7rem',
        padding:'1rem 0.8rem'
    },
    logo:{
        display:'block',
        margin:'0 auto'
    },
    mainText:{
        marginTop:'1.3rem',
        marginBottom:'1rem'
    },
    inputFeilds:{
        width:'100%',
        margin:'0.7rem 0'
    },
    form:{
        width:'86%',
        margin:'0 auto'
    },
    loginBtn:{
        marginTop:'2.2rem'
    }

});

export default styles;
