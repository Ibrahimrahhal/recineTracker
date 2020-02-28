import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './login/login';
export default class router extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            
            </Router>
        )
    }
}
