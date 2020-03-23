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
import Radio from './RadioCustom';
import { Checkbox } from '@material-ui/core';
import { StyleSheet, css } from 'aphrodite';

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

    convertToTomeString(date){
      return `${date.getHours()}:${date.getMinutes()}`;
    }
    convertFromTimeString(string){
      return `17 dec 2017 ${string}`;
    }
    convertDateToString(date){
      return `${date.getUTCFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    }
    getRightType(){
        const {showPassword} = this.state;
        const {className} = this.props
        switch(this.props.type){
            case 'text': case 'number':
            return <TextField label={this.props.label} placeholder={this.props.placeholder} className={className} {...this.props.field} type={this.props.type} disabled={this.props.disabled}  variant="outlined" />
            case 'password':
            return (
                    <TextField 
                        label={this.props.label} 
                        {...this.props.field} 
                        variant="outlined"
                        type={showPassword?'text':'password'}
                        className={className}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled} 
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
                    value={this.props.field.value?(new Date(this.props.field.value)):(new Date())}
                    onChange={value => {this.props.form.setFieldValue(this.props.field.name,this.convertDateToString(value))}} 
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    disabled={this.props.disabled} 
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
                        value={this.props.field.value?(this.convertFromTimeString(this.props.field.value)):(new Date())}
                        onChange={value => {this.props.form.setFieldValue(this.props.field.name,this.convertToTomeString(value))}} 
                        disabled={this.props.disabled} 
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                  </MuiPickersUtilsProvider>
                  );
                case 'select':
                  return (
                    <FormControl variant="outlined"  className={className}>
                    <InputLabel  id={this.props.label+'label'}>
                    {this.props.label}
                    </InputLabel>
                    <Select
                      labelId={this.props.label+'label'}
                      id={this.props.label}
                      disabled={this.props.disabled} 
                      {...this.props.field} 
                    >
                      {
                        this.props.options.map((option)=>{
                          return (<MenuItem value={option.value}>{option.label}</MenuItem>)

                        })
                      }
                    </Select>
                  </FormControl>
                  )
              
              case 'textarea':
                return (
                  <TextField label={this.props.label} multiline rowsMax="4" placeholder={this.props.placeholder} className={className} {...this.props.field} type={this.props.type} variant="outlined" />
                )
              case 'checkbox':
                  return (
                    <div className={css(styles.checkboxContainer)}>
                    <Checkbox disabled={this.props.disabled}  label={this.props.label} className={className} {...this.props.field} type={this.props.type}  />
                    <small><b>{this.props.label}</b></small>
                    </div>
                    )
              case 'radio':
                    return <Radio 
                    {...this.props} 
                    {...this.props.field}
                    value = {this.props.form.values[this.props.field.name]}
                    onChange={value => {this.props.form.setFieldValue(this.props.field.name,value)}} ></Radio>
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


const styles = StyleSheet.create({
  checkboxContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})