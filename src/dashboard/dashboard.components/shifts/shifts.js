import React, { Component } from 'react'
import Text from '../../../baseComponents/Text';
import Button from '../../../baseComponents/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { css } from 'aphrodite';
import { getAllShifts } from '../../../services/http'
import styles from './shifts.stylesheet';
import UserContext from '../../../services/userContext';
import NgIf from '../../../baseComponents/NgIf';
import CircularProgress from '@material-ui/core/CircularProgress';

class shifts extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = { 
            shifts:[],
            loading:true
         }
    }
    componentDidMount(){
        getAllShifts(this.context.user).then((res)=>{
            if(JSON.stringify(res.data.Result) != JSON.stringify(this.context.reports))
            this.context.setReports(res.data.Result);
            this.setState({...this.state, loading:false})
        }).catch((err)=>{
            if(this.context.reports.length > 0)
                this.context.setReports([]);
            this.setState({...this.state, loading:false})

        });
    }

    selectShift(shift){
        this.context.selectShift(shift);
        this.props.history.push(`/shift/${shift.ShiftID}`)
    }

    newShift= ()=>{
        this.context.selectShift({
            ShiftID: -1
        });
        this.props.history.push(`/shift/${-1}/details`)
    }

    render() { 
        return ( 
            <div className={css(styles.shiftsContainer)}>
                <Text Type="h3" Color={'darker'} Weight={'bold'}>Your Shifts</Text>
                <div className={css(styles.btnContainer)}>
                    <Button rounded long light className={css(styles.addBtn)} onClick={this.newShift}><AddIcon/> Report A New Shift</Button>
                </div>
                <div className={css(styles.lineBreak)}></div>
                <NgIf exp={this.state.loading}>
                <CircularProgress size={50} className={css(styles.loader)}/>
                </NgIf>
                <NgIf exp={this.context.reports && !this.state.loading}>
                <div className={css(styles.table)}>
                <Table>
                    <TableHead className={css(styles.tableHead)}>
                        <TableRow>
                            <TableCell align="center"><Text Type="small" Color={'darker'} Weight={'bold'}>Shift ID</Text></TableCell>
                            <TableCell align="center"><Text Type="small" Color={'darker'} Weight={'bold'}>Shift Date</Text></TableCell>
                            <TableCell align="center"><Text Type="small" Color={'darker'} Weight={'bold'}>Total Time CFS</Text></TableCell>
                            <TableCell align="center"><Text Type="small" Color={'darker'} Weight={'bold'}>Total Arrests</Text></TableCell>
                            <TableCell align="center"><Text Type="small" Color={'darker'} Weight={'bold'}>Total Citations</Text></TableCell>
                            <TableCell align="center"><Text Type="small" Color={'darker'} Weight={'bold'}>Total Calls</Text></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={css(styles.tableBody)}>
                        {
                            this.context.reports.map((row,index)=>{
                                return (
                                    <TableRow onClick={()=>this.selectShift(row)} align="center" className={css(index%2 == 0 ? styles.tableBodyEven:styles.tableBodyOdd)}>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.ShiftID}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.ShiftDate}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.TotalTimeCFS}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.TotalArrests}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.TotalCitations}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.TotalCalls}</Text></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        
                    </TableBody>
                </Table>
                </div>
                </NgIf>

            </div> 
            );
    }
}
 
export default shifts;