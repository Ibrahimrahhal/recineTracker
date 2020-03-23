import React, {Component} from 'react';
import { css } from 'aphrodite';
import styles from './dashboard.stylesheet';
import Text from '../baseComponents/Text';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardRouter from './dashboard.router';
import UserContext from '../services/userContext';
import NgIf from '../baseComponents/NgIf';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink  } from "react-router-dom";
import { getAllArrests, getAllClassifications, getAllCitations, getDomain } from '../services/http';
import { setCitations, setArrests, setClass, setDomain  } from '../services/data';
class dashboard extends Component {
    static contextType = UserContext;
    
    constructor(props) {
        super(props);
        this.state = {  }
    }

    getShiftId(){

    }
    componentDidMount(){
        window["dashboard"] = this;
        this.props.history.listen((location)=>{
            if(location.pathname.includes("shifts"))
                this.context.removeActiveShift();
        });
        getAllArrests(this.context.user).then(result=>{
            setArrests(result.data.Result);
        });
        getAllClassifications(this.context.user).then(result=>{
            setClass(result.data.Result);
        });
        getAllCitations(this.context.user).then(result=>{
            setCitations(result.data.Result);
        });
        getDomain('TypeOfCall', this.context.user).then((result)=>{
            setDomain('TypeOfCall' , result.data.Result)
        });

        getDomain('D&SI', this.context.user).then((result)=>{
            setDomain('D&SI' , result.data.Result)
        });

    }
    render() { 
        return ( 
            <div className={css(styles.dashboardContainer)}>
                <aside className={css(styles.sidebar)}>
                    <div className={css(styles.nameBox)}>
                        <Text Type="h4" Weight="light" Color={'White'}>{this.context.user.firstname} <Text Type="span" Weight="bold" Color={'White'} >{this.context.user.lastname}</Text></Text>
                    </div>
                    <div>
                        <NavLink  to={"/shifts"} className={css(styles.sidebarMenuItem)} activeClassName={css(styles.activeSideMenu)}><Text Type="small" Weight="light" Color={'White'} className={css(styles.sidebarMenuItemText)}><AvTimerIcon className={css(styles.icons)}/> Your Shifts</Text></NavLink>
                        <NgIf exp={this.context.activeShift}>
                            <NavLink to={`/shift/${this.context.activeShift && this.context.activeShift.ShiftID}`} activeClassName={css(styles.activeSideMenu)} className={css(styles.sidebarMenuItem)}>
                               <Text Type="small" Weight="light" Color={'White'} className={css(styles.sidebarMenuItemText)}> <ExpandMoreIcon className={css(styles.icons)}/>  Active Shift</Text>
                            </NavLink >
                            <NavLink className={css(styles.shiftsSubMenu)} to={`/shift/${this.context.activeShift && this.context.activeShift.ShiftID}`}><Text Type="div" Weight="light" Color={'White'}>Shift Overview</Text></NavLink>
                            <NavLink className={css(styles.shiftsSubMenu)} to={`/shift/${this.context.activeShift && this.context.activeShift.ShiftID}/details`}><Text Type="div" Weight="light" Color={'White'}>Shift Main Info</Text></NavLink>
                            <NavLink className={css(styles.shiftsSubMenu)} to={`/shift/${this.context.activeShift && this.context.activeShift.ShiftID}/calls`}><Text Type="div" Weight="light" Color={'White'}>Shift Calls</Text></NavLink>
                        </NgIf>
                        <span className={css(styles.sidebarMenuItem)}><Text Type="small" Weight="light" Color={'White'} className={css(styles.sidebarMenuItemText)} onClick={()=>{window.location.href = window.location.origin}}><ExitToAppIcon className={css(styles.icons)}/> Logout</Text></span>
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