import React, {Component} from 'react';
import { css } from 'aphrodite';
import styles from './dashboard.stylesheet';
import Text from '../baseComponents/Text';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardRouter from './dashboard.router';
import UserContext from '../services/userContext';
import NgIf from '../baseComponents/NgIf'
class dashboard extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={css(styles.dashboardContainer)}>
                <aside className={css(styles.sidebar)}>
                    <div className={css(styles.nameBox)}>
                        <Text Type="h4" Weight="light" Color={'White'}>{this.context.user.firstname} <Text Type="span" Weight="bold" Color={'White'} >{this.context.user.lastname}</Text></Text>
                    </div>
                    <div>
                        <span className={css(styles.sidebarMenuItem)}><Text Type="small" Weight="light" Color={'White'} className={css(styles.sidebarMenuItemText)}><AvTimerIcon className={css(styles.icons)}/> Your Shifts</Text></span>
                        <NgIf exp={this.context.activeShift}>
                            <span className={css(styles.sidebarMenuItem)}>
                                <Text Type="small" Weight="light" Color={'White'} className={css(styles.sidebarMenuItemText)}>Your Shift</Text>
                                <Text Type="div" Weight="light" Color={'White'}>Shift Overview</Text>
                                <Text Type="div" Weight="light" Color={'White'}>Shift Main Info</Text>
                                <Text Type="div" Weight="light" Color={'White'}>Shift Calls</Text>
                            </span>
                        </NgIf>
                        <span className={css(styles.sidebarMenuItem)}><Text Type="small" Weight="light" Color={'White'} className={css(styles.sidebarMenuItemText)}><ExitToAppIcon className={css(styles.icons)}/> Logout</Text></span>
                    </div>
                </aside>

                <main className={css(styles.mainSection)}>
                    <div className={css(styles.routerContainer)}>
                        <DashboardRouter></DashboardRouter>
                    </div>
                    <img alt=""  className={css(styles.logo)} src={`${process.env.PUBLIC_URL}/images/logo.png`} />
                </main>
            </div>
            
         );
    }
}
 
export default dashboard;