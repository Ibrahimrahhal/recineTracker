import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Config from '../config';
import TextField from '@material-ui/core/TextField';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    getRightType(){
        switch(this.props.type){
            case 'text': case 'number':
            return <TextField label={this.props.label} variant="outlined" />
            break;

            default:
            break;
        }
    }
    render() {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#af7e2f',
                  },
                secondary: {
                  main: '#af7e2f'
                }
          }});
        return (
            <ThemeProvider theme={theme}>
                {this.getRightType()}
            </ThemeProvider>
             );
    }
}

const styles = StyleSheet.create({
mainInput : {
    padding: '1rem 1.3rem',
    border:`solid 2px ${Config.mainColor}`,
    borderRadius:'0.5rem',
    backgroundColor:'rgba(220,220,220,0)',
    transition:'all 0.3s ease-out',
    ':hover':{
        backgroundColor:'rgba(220,220,220,1)'
    }
}
});
export default Input;