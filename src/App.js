import React, {Component} from 'react';
import Router from './router';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { login } from './services/http';
import UserContext from './services/userContext';

class App extends Component {
  state={
    user:null,
    activeShift:null
  }

  render(){
    return (
      <UserContext.Provider value={{user:this.state.user, handleLogin:this.handleLogin, activeShift:this.state.activeShift, selectShift:this.selectShift, removeActiveShift:this.removeActiveShift}}>
        <Router></Router>
      </UserContext.Provider>
    );
  }
  handleLogin = (username,password)=>{
    return new Promise((resolve, reject)=>{
      login(username, password).then((response)=>{
        let user = response.data.Result[0],firstname,lastname;
        try{
          firstname = user.EmpName.split(" ")[0];
          lastname = user.EmpName.split(" ")[1];
        }catch(e){
        }
        this.setState({...this.state, user:{
          ID:user.EmpID,
          username:user.EmpName,
          firstname,
          lastname,
          token:user.Token
        }},()=>{
          resolve(user);
        });
      }).catch((err)=>{
        reject(err);
      });
    })
  }
  handleSignup(){

  }

  selectShift = (shiftID)=>{
    this.setState({...this.state, activeShift:shiftID});
  }

  removeActiveShift = ()=>{
    this.setState({...this.state, activeShift:null});

  }


}

export default App;
