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
class shifts extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = { 
            shifts:[]
         }
    }
    componentDidMount(){
        window['shifts'] = this;
        getAllShifts(this.context.user).then((res)=>{
            this.setState({...this.state, shifts:res.data.Result})
        });
    }

    selectShift(shiftID){
        this.context.selectShift(shiftID);
        this.props.history.push(`/shifts/${shiftID}`)
    }
    data = [{
        shiftID :12,
        shiftDate:'12-Jan-2019',
        totalTimeCFS:'7',
        totalArrests:'3',
        totalCitations:'3',
        totalCalls:'7'
    },{
        shiftID :12,
        shiftDate:'12-Jan-2019',
        totalTimeCFS:'7',
        totalArrests:'3',
        totalCitations:'3',
        totalCalls:'7'
    },
    {
        shiftID :12,
        shiftDate:'12-Jan-2019',
        totalTimeCFS:'7',
        totalArrests:'3',
        totalCitations:'3',
        totalCalls:'7'
    },{
        shiftID :12,
        shiftDate:'12-Jan-2019',
        totalTimeCFS:'7',
        totalArrests:'3',
        totalCitations:'3',
        totalCalls:'7'
    },{
        shiftID :12,
        shiftDate:'12-Jan-2019',
        totalTimeCFS:'7',
        totalArrests:'3',
        totalCitations:'3',
        totalCalls:'7'
    }]
    render() { 
        return ( 
            <div className={css(styles.shiftsContainer)}>
                <Text Type="h3" Color={'darker'} Weight={'bold'}>Your Shifts</Text>
                <div className={css(styles.btnContainer)}>
                    <Button rounded long light className={css(styles.addBtn)}><AddIcon/> Report A New Shift</Button>
                </div>
                <div className={css(styles.lineBreak)}></div>
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
                            this.data.map((row,index)=>{
                                return (
                                    <TableRow onClick={()=>this.selectShift(row.shiftID)} align="center" className={css(index%2 == 0 ? styles.tableBodyEven:styles.tableBodyOdd)}>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.shiftID}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.shiftDate}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.totalTimeCFS}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.totalArrests}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.totalCitations}</Text></TableCell>
                                        <TableCell align="center" className={css(styles.tableCellNotHeader)}><Text Type="small" Color={'darker'} Weight={'bold'} >{row.totalCalls}</Text></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        
                    </TableBody>
                </Table>
                </div>
            </div> 
            );
    }
}
 
export default shifts;