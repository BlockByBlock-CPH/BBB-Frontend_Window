import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';

//Components
import TableBBB from '../../molecules/Table';
import Spinner from '../../atoms/Spinner';
import HBarChart from '../../molecules/HBarChart';
import PieChart from '../../molecules/PieChart';
import DoughnutChart from '../../molecules/DoughnutChart';
import Modal from '../../organisms/Modal';
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

    const { classes, dataTH, dataTC, dataAI, dataHW } = this.props;
  
    return (
        <Grid item sm={12} className={classes.grid}>
          <Paper className={classes.paper}>
          {
            Object.keys(dataTH).length ? <TableBBB dataTH={dataTH} /> : <Spinner size={40} />
          }
          </Paper>
          <Paper className={classes.paper2}>
          {
            Object.keys(dataAI).length ? 
              <Fragment>
                <Typography variant="h4" noWrap>
                  AREA OF INFLUENCE
                </Typography>
                <Typography variant="subtitle2" style={{ textAlign: 'center' }} noWrap>
                  {dataAI[0].area} km<sup>2</sup>
                </Typography>
              </Fragment> : <Spinner size={40} />
          }
          </Paper>

          {
            Object.keys(dataHW).length ? 
            <Paper className={classes.paper}>
              <Button onClick={this.handleOpen}>Open HomeZone Wheel</Button>
              <Modal 
                open={this.state.open}
                handleClose={this.handleClose}
                dataHW={dataHW}
              />
            </Paper> 
            : ''
          }
          <Paper className={classes.paper}>
            <PieChart />
          </Paper>
          <Paper className={classes.paper}>
            <DoughnutChart />
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
    dataTC: PropTypes.object.isRequired,
    dataAI: PropTypes.object.isRequired,
    dataHW: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(RightContent);