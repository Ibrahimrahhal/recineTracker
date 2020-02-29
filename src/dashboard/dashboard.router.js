import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shifts from './dashboard.components/shifts/shifts'
class dashboardRouter extends Component {
    state = {  }
    render() { 
        return ( 
        <Router>
            <Switch>
                <Route path="/shifts">
                    <Shifts />
                </Route>
            </Switch>
        </Router> 
        );
    }
}
 
export default dashboardRouter;