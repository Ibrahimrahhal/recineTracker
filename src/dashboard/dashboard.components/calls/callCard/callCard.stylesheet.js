import { StyleSheet } from 'aphrodite';
import config from '../../../../config';
const styles = StyleSheet.create({
cardContainer:{
    height:'11vh',
    minHeight:'90px',
    width:'100%',
    borderRadius:'0.8rem',
    padding:'0.5rem 1rem',
    backgroundColor:'#fff',
    border:`solid 1px ${config.getMainColorWithOpacity(0.5)}`,
    boxShadow: ` 0px 0px 10px 0px ${config.getMainColorWithOpacity(0.5)}`,
    position:'relative',
    margin:"0.7rem 0"

},
cardContainerEditMode:{
    height:'unset'
},
textLocation:{
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '50%',
    display: 'block',
    overflow: 'hidden',
    margin:0
},
secondLine:{
    opacity:0.8,
    padding:'0 0.2rem'
},
circleForType:{
    height:'40px',
    width:'40px',
    borderRadius:'50%',
    backgroundColor:config.mainColor,
    position:'absolute',
    top:'0',
    bottom:'0',
    margin:'auto',
    right:'1rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

},
editContainer:{
    display:'flex',
    minHeight:'300px',
    paddingTop:'1rem'

},
editFirstCol:{
    flex:'4',
    display:'flex',
    flexDirection:'column',
    marginRight:'0.5rem'
},
editSecondCol:{
    flex:'2',
    display:'flex',
    flexDirection:'column',
    marginRight:'0.5rem'

},
flexGrowTwo:{
    flex:'2'
},
flexGrowOne:{
    flex:'1',
},
marginTopOne:{
    marginTop:'1rem'
},
marginRightQ:{
    marginRight:'0.25rem'
},
marginTopHalf:{
marginTop:'0.3rem'
},
marginLeftQ:{
    marginLeft:'0.25rem'
},
editThirdCol:{
    flex:'1'
},
displayFlex:{
    display:'flex'
},
small:{
    transform:'scale(0.8)'
}


});

export default styles