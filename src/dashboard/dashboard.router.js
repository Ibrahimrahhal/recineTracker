import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Shifts from './dashboard.components/shifts/shifts';
import Overview from './dashboard.components/overview/overview';
import Main from './dashboard.components/mainInfo/main';
import Calls from './dashboard.components/calls/calls';

class dashboardRouter extends Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route path="/shifts" exact component={withRouter(Shifts)} />
                <Route path="/shift/:shiftID" exact component={withRouter(Overview)} />
                <Route path="/shift/:shiftID/details" exact component={withRouter(Main)} />
                <Route path="/shift/:shiftID/calls" exact component={withRouter(Calls)} />
            </Switch>
        );
    }
}
 
export default dashboardRouter;