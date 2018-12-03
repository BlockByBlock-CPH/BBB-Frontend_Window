import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

//Components
import PieChart from '../../molecules/PieChart';
import DoughnutChart from '../../molecules/DoughnutChart';
import Filters from '../../molecules/Filters';

//Styles
import { styles } from './styles';


class LeftContent extends Component {
    render(){

    const { classes } = this.props;

    return (
        <Grid item sm={12} className={classes.grid}>
        <Paper className={classes.paperFilters}>
            <Filters />
        </Paper>
        <Paper className={classes.paper}>
            <PieChart />
        </Paper>
        <Paper className={classes.paper}>
            <DoughnutChart />
        </Paper>
        {/* <Paper className={classes.paperTop}>
        {
            Object.keys(dataTC).length ? <HBarChart dataTC={dataTC.dataChartTop1}/> : <Spinner size={40} />
        }
        </Paper>
        <Paper className={classes.paperTop}>
        {
            Object.keys(dataTC).length ? <HBarChart dataTC={dataTC.dataChartTop2}/> : <Spinner size={40} />
        }
        </Paper> */}
        </Grid> 
    )
  }
}

LeftContent.propTypes = {
    classes: PropTypes.object.isRequired,
    dataTC: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LeftContent);