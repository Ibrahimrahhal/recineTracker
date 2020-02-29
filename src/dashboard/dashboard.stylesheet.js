import { StyleSheet } from 'aphrodite';
import config from '../config';
const styles = StyleSheet.create({
 dashboardContainer:{
     minHeight:'100vh',
     width:'100vw',
     backgroundColor:config.whiteColor,
     position:'relative'
 },
 sidebar:{
     position:"fixed",
     height:'100vh',
     width:'25vw',
     minWidth:'200px',
     maxWidth:'250px',
     backgroundColor:config.black,
 },
nameBox:{
    backgroundColor:config.darker,
    color:'#fff',
    height:'150px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
},
sidebarMenuItem:{
    padding:'0.8rem 1.5rem',
    cursor:'pointer',
    transition:'all 0.2s ease-out',
    display:'block',
    ':hover':{
        backgroundColor:config.darker,
    }
},
icons:{
    height:'23px',
    width:'23px',
    marginRight:'0.4rem'
},
sidebarMenuItemText:{
    display:'flex',
    alignItems:'center'
},
mainSection:{
    width:'100%',
    display:'flex',
    justifyContent:'flex-end',
    position:'relative'
},
routerContainer:{
    width:'70vw',
    maxWidth:'calc(100vw - 200px)',
    minWidth:'calc(100vw - 250px)',
},
logo:{
    position:'absolute',
    top:'10px',
    right:'10px',
    width:'60px', 
    height:'auto'
}
});

export default styles;
