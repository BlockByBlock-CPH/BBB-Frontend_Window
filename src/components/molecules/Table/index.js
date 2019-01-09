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

const TableBBB = (props) => {

    const { classes, dataTH } = props;
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                {
                    dataTH.th.map(title => {
                        return(
                            <TableCell key={title} className={classes.tableHead}>
                                {title}
                            </TableCell>
                        );
                    })
                }
                </TableRow>
            </TableHead>
            <TableBody>
            {
                dataTH.td.map(row => {
                    return (
                        <TableRow key={row.id}>
                            <TableCell className={classes.tableCell} scope="row">
                            { 
                                row.id === 1 ? <div><ArrowUpward /><PermIdentity /></div> : <div><ArrowDownward /><PermIdentity /></div>
                            }
                            </TableCell>
                            <TableCell className={classes.tableCell} numeric>{row.day}</TableCell>
                            {
                                row.hour ? <TableCell className={classes.tableCell} numeric>{row.hour}</TableCell> : null
                            }
                            <TableCell className={classes.tableCell} numeric>{row.people}</TableCell>
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