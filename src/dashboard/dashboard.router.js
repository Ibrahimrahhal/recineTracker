import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shifts from './dashboard.components/shifts/shifts';
import Overview from './dashboard.components/overview/overview';
import Main from './dashboard.components/mainInfo/main';
import Calls from './dashboard.components/calls/calls';

class dashboardRouter extends Component {
    state = {  }
    render() { 
        return ( 
        <Router>
            <Switch>
                <Route path="/shifts" exact component={Shifts} />
                <Route path="/shifts/:shiftID" exact component={Overview} />
                <Route path="/shifts/:shiftID/details" exact component={Main} />
                <Route path="/shifts/:shiftID/calls" exact component={Calls} />

            </Switch>
        </Router> 
        );
    }
}
 
export default dashboardRouter;