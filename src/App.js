import React, {Component} from 'react';
import Router from './router';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

class App extends Component {
  user=null;
  render(){
    return (
      <Router></Router>
    );
  }
  handleLogin(){

  }
  handleSignup(){
    
  }
}

export default App;
