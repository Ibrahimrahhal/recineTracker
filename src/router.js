import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import UserContext from './services/userContext.js';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import NgIf from './baseComponents/NgIf';
export default class router extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <RouteWrapper Component={withRouter(Login)} public path="/login" />
                    <RouteWrapper Component={withRouter(Dashboard)} path="/" />
                </Switch>
            </Router>
        )
    }
}
class RouteWrapper extends Component{
    static contextType = UserContext;

    render(){
        const { user } = this.context;
        const { Component } = this.props;

        return (
            <NgIf exp={user || this.props.public} else={<Redirect to="/login"/>}>
                <Route path={this.props.path} component={Component} />
            </NgIf>
        );
    }
}
