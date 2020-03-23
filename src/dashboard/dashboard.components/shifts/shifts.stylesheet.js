import { StyleSheet } from 'aphrodite';
import config from '../../../config';
const styles = StyleSheet.create({
   shiftsContainer:{
    padding:'2rem 1rem',

   },
   btnContainer:{
       display:'flex'
   },
   addBtn:{
       transform:'scale(0.8)',
       display:'flex',
       alignItems:'center'
   },
   lineBreak:{
       height:'1px',
       width:'80%',
       margin:'1rem auto',
       backgroundColor:config.mainColor,
       opacity:0.2
   },
   tableCellNotHeader:{
       padding:'8px 16px',
       opacity:'0.8'
   },
   table:{
    borderRadius:'1rem',
    width:'80%',
    margin:'0 auto',
    marginTop:'4rem',
    backgroundColor:config.getMainColorWithOpacity('0.5')

   },
   tableHead:{
       backgroundColor:'transperant'
   },
   tableBodyEven:{
        backgroundColor:'#dedede'
   },
   tableBodyOdd:{
    backgroundColor:config.whiteColor

   },
   loader:{
    color:config.mainColor,
    margin:'0 auto',
    marginTop:'9rem',
    display:'block'
},
});

export default styles;
