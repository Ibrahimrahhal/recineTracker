import React , {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Input from '../baseComponents/Input';
import Text from '../baseComponents/Text';
import Form from '../baseComponents/Form';
import Button from '../baseComponents/Button';
import Config from '../config';
import './login.css';


class login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        return (
            <div className={css(styles.loginMainWrapper)}>
                <div className={css(styles.backgroundImage)}>
                </div>
                <div className={css(styles.loginContent)}>
                <div style={{backgroundColor:"#fff",padding:"5rem"}}>
                    <Input type="text" label ="This is Input"></Input>
                </div>
                </div>
            </div>

        );
    }
}

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
        backgroundImage:`url(${process.env.PUBLIC_URL}/images/loginStock.jpg)`,
        zIndex:-1
    },
    loginContent:{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex:0,
        backgroundColor:'rgba(0,0,0,0.5)'
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
    }

})

export default login;