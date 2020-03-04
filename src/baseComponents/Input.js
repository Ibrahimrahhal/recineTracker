import React, {Component} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
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
            case 'date':
              return (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    margin="normal"
                    id={this.props.label}
                    format="MM/dd/yyyy"
                    label={this.props.label} 
                    className={className}
                    {...this.props.field} 
                    
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
              </MuiPickersUtilsProvider>
              );

              case 'time':
                return (
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      inputVariant="outlined"
                      margin="normal"
                      id={this.props.label}
                      className={className}
                      label={this.props.label} 
                      {...this.props.field} 
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                </MuiPickersUtilsProvider>
                );
                case 'select':
                  return (
                    <FormControl variant="outlined">
                    <InputLabel  id={this.props.label+'label'}>
                    {this.props.label}
                    </InputLabel>
                    <Select
                      labelId={this.props.label+'label'}
                      id={this.props.label}
                      {...this.props.field} 
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  )
              
              case 'textarea':
                return (
                  <TextField label={this.props.label} multiline rowsMax="4" placeholder={this.props.placeholder} className={className} {...this.props.field} type={this.props.type} variant="outlined" />
                )

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