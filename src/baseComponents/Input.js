import React, {Component} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Field } from 'formik';
import config from '../config';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPassword:false
         };
        window['input'] = this.props
    }

    handleClickShowPassword = () => {
        this.setState({...this.state, showPassword: !this.state.showPassword });
      };
    
    handleMouseDownPassword = event => {
        event.preventDefault();
      };
    getRightType(){
        const {showPassword} = this.state;
        const {className} = this.props
        switch(this.props.type){
            case 'text': case 'number':
            return <TextField label={this.props.label} placeholder={this.props.placeholder} className={className} {...this.props.field} type={this.props.type} variant="outlined" />
            case 'password':
            return (
                    <TextField 
                        label={this.props.label} 
                        {...this.props.field} 
                        variant="outlined"
                        type={showPassword?'text':'password'}
                        className={className}
                        placeholder={this.props.placeholder}
                        InputProps={{ endAdornment:
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                              >
                                {!this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          }} />
                        

            );
            default:
            break;
        }
    }
    render() {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: config.mainColor,
                  },
                secondary: {
                  main: config.mainColor
                }
          }});
        return (
            <ThemeProvider theme={theme}>
                {this.getRightType()}
            </ThemeProvider>
             );
    }
}


class ConnectedInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    

    render(){
        return (
            <Field {...this.props} component={Input} ></Field>
            )
    }
}


export default ConnectedInput;