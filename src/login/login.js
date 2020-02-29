import React , {Component} from 'react';
import { css } from 'aphrodite';
import Input from '../baseComponents/Input';
import Text from '../baseComponents/Text';
import Form from '../baseComponents/Form';
import Button from '../baseComponents/Button';
import styles from './login.stylesheet';
import './login.stylesheet.js';


class login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  };
    }
    onSubmit = (values)=>{
        console.log(values)
    }
    render() {

        return (
            <div className={css(styles.loginMainWrapper)}>
                <div className={css(styles.backgroundImage)}>
                </div>
                <div className={css(styles.loginContent)}>
                    <div className={css(styles.formContainer)}>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className={css(styles.logo)} alt="logo" width='65px' height="auto"/>
                    <Text Type={'h4'} Weight={'bold'} Color={'darker'} className={css(styles.mainText)}>Welcome Back,</Text>
                    <div  className={css(styles.form)}>
                    <Form formProps={{initialValues:{ Username: ''}, onSubmit:this.onSubmit}}>
                    <Input type="text" name="Username" label="Username" placeholder="Please Enter Your Username" className={css(styles.inputFeilds)}></Input>
                    <Input type="password" name="Password" label ="Password" placeholder="Please Enter Your Password" className={css(styles.inputFeilds)}></Input>
                    <Button rounded centered long light className={css(styles.loginBtn)} type="submit">Login</Button>
                    </Form>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default login;