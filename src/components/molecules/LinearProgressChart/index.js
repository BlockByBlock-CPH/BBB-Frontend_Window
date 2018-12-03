import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, LinearProgress } from '@material-ui/core';

//Components

//Styles
import { styles } from './styles';


class LinearProgressChart extends Component {
    render(){

    const { classes, dataTC } = this.props;

    const dataChart = {
        title: 'Top 5 Max People by Zone',
        data: [
            { label: 123, value: 34},
            { label: 345, value: 45},
            { label: 678, value: 23},
            { label: 654, value: 22},
            { label: 1257, value: 15}

        ]
    }
    const { title } = dataChart;
    const MIN = 15;
    const MAX = 45;
    const normalise = value => (value - MIN) * 100 / (MAX - MIN);
    console.log("Linear dataTC: ", dataChart.data);
    

    return (
        <Paper className={classes.PaperNewTop}>
            <h6 className={classes.topTitle}>{title}</h6>
            <div className={classes.categoryContainer}>
                {
                    dataChart.data.map((d,index) => {
                        return (
                            <div key={index}>
                                <span className={classes.topTitle}>{d.label}</span>
                                <LinearProgress variant="determinate" value={normalise(d.value)} />
                            </div>
                        )
                    })
                }
            </div>
        </Paper>
    )
  }
}

LinearProgressChart.propTypes = {
    classes: PropTypes.object.isRequired,
    dataTC: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LinearProgressChart);