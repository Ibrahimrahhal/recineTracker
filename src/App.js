import React, {Component} from 'react';
import Router from './router';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { login } from './services/http';
import UserContext from './services/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  state={
    user:null,
    activeShift:null,
    reports:[]
  }


  constructor(props){
    super(props);
    toast.configure()
  }
  render(){
    return (
      <UserContext.Provider value = {{
        user:this.state.user, 
        handleLogin:this.handleLogin, 
        activeShift:this.state.activeShift, 
        selectShift:this.selectShift, 
        removeActiveShift:this.removeActiveShift,
        setReports:this.setReports,
        reports:this.state.reports
      }}>
        <Router></Router>
      </UserContext.Provider>
    );
  }
  handleLogin = (username,password)=>{
    return new Promise((resolve, reject)=>{
      login(username, password).then((response)=>{
        let user = response.data.Result[0],firstname,lastname;
        window["user"] = user;
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
          token:user.Token,
          isAdmin: user.IsAdmin == 1
        }},()=>{
          resolve(this.state.user);
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

  setReports = (reports)=>{
    this.setState({...this.state, reports});
  }


}

export default App;
