import React , {Component} from 'react';
import { css } from 'aphrodite';
import Input from '../baseComponents/Input';
import Text from '../baseComponents/Text';
import Form from '../baseComponents/Form';
import Button from '../baseComponents/Button';
import styles from './login.stylesheet';
import UserContext from '../services/userContext';
import './login.stylesheet.js';
import { toast } from 'react-toastify';

class login extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = { 
            loading:false
         };
    }
    componentDidMount(){
        // setInterval(()=>{
        // toast.error("hi there")
        // },5000)
    }
    onSubmit = (values)=>{
        console.log(values);
        if(this.state.loading)
        return;
        this.setState({...this.state, loading:true});
        this.context.handleLogin( values.Username, values.Password).then((user)=>{
            if(user.isAdmin)
            this.props.history.push('/admin');
            else
            this.props.history.push('/shifts');

        }).catch((err)=>{
            toast.error("Wrong Username or Password");
            this.setState({...this.state, loading:false});
        });
    }
    render() {
        window["cone"] =this;

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
                    <Button rounded loading={this.state.loading} centered long light className={css(styles.loginBtn)} type="submit">Login</Button>
                    </Form>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default login;