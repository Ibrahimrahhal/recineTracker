import { StyleSheet } from 'aphrodite';
import config from '../../config';
const styles = StyleSheet.create({
    cardContaier:{
        height:'12vh',
        width:'15vw',
        backgroundColor:'#fff',
        minHeight:'150px',
        minWidth:'200px',
        maxWidth:'260px',
        maxHeight:'200px',
        borderRadius:'0.5rem',
        border: `solid 1px ${config.getMainColorWithOpacity(0.4)}`,
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'1rem 1.3rem',
        transition:'all 0.2s ease-out',
        userSelect:'none',
        ':hover':{
            transform:'scale(1.1)'
        }
    }

})

export default styles;