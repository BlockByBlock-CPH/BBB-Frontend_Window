import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

//Components
import TableBBB from '../../molecules/Table';
import Spinner from '../../atoms/Spinner';
import HBarChart from '../../molecules/HBarChart';

//Styles
import { styles } from './styles';


class RightContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){

    const { classes, dataTH, dataTC } = this.props;

    return (
        <Grid item sm={12} className={classes.grid}>
            <Paper className={classes.paper}>
            {
                Object.keys(dataTH).length ? <TableBBB dataTH={dataTH} /> : <Spinner size={40} />
            }
            </Paper>
            <Paper className={classes.paperTop}>
            {
                Object.keys(dataTC).length ? <HBarChart dataTC={dataTC.dataChartTop1}/> : <Spinner size={40} />
            }
            </Paper>
            <Paper className={classes.paperTop}>
            {
                Object.keys(dataTC).length ? <HBarChart dataTC={dataTC.dataChartTop2}/> : <Spinner size={40} />
            }
            </Paper>
        </Grid> 
    )
  }
}

RightContent.propTypes = {
    classes: PropTypes.object.isRequired,
    dataTH: PropTypes.object.isRequired,
    dataTC: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(RightContent);