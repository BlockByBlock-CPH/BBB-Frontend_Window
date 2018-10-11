import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {PermIdentity, ArrowDownward, ArrowUpward} from '@material-ui/icons';

import { styles } from './styles';


let id = 0;
function createData(day, hour, people) {
  id += 1;
  return { id, day, hour, people };
}

const rows = [
    createData('MONDAY', 9, 2336),
    createData('MONDAY', 1, 650)
];

const TableBBB = (props) => {

    const { classes } = props;

    return (
        <Table className={classes.Table}>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.TableCell}></TableCell>
                    <TableCell className={classes.TableCell} numeric>Day</TableCell>
                    <TableCell className={classes.TableCell} numeric>Hour</TableCell>
                    <TableCell className={classes.TableCell} numeric># People</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                rows.map(row => {
                    return (
                        <TableRow key={row.id}>
                            <TableCell className={classes.TableCell} component="th" scope="row">
                            { 
                               row.hour === 21 ? <div><ArrowUpward /><PermIdentity /></div> : <div><ArrowDownward /><PermIdentity /></div>
                            }
                            </TableCell>
                            <TableCell className={classes.TableCell} numeric>{row.day}</TableCell>
                            <TableCell className={classes.TableCell} numeric>{row.hour}</TableCell>
                            <TableCell className={classes.TableCell} numeric>{row.people}</TableCell>
                        </TableRow>
                    );
                })
            }
            </TableBody>
        </Table>
    )    
}

TableBBB.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TableBBB);