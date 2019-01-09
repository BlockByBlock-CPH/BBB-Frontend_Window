import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button } from '@material-ui/core';

//Components
import TableBBB from '../../molecules/Table';
import Spinner from '../../atoms/Spinner';
import HBarChart from '../../molecules/HBarChart';
import PieChart from '../../molecules/PieChart';
import DoughnutChart from '../../molecules/DoughnutChart';
import Modal from '../../organisms/Modal';
import AreaInfluence from '../../molecules/AreaInfluence';

//Styles
import { styles } from './styles';


class RightContent extends PureComponent {
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

    const { classes, dataTH, dataTC, areaInfluence, dataHomeZoneWheel } = this.props;

    return (
        <Grid item sm={12} className={classes.grid}>

          <Paper className={classes.paper}>
          {
            Object.keys(dataTH).length ? <TableBBB dataTH={dataTH} /> : <Spinner size={40} />
          }
          </Paper>

          <Paper className={classes.paper2}>
          {
            Object.keys(areaInfluence).length ? <AreaInfluence areaInfluence={areaInfluence} />: <Spinner size={40} />
          }
          </Paper>

          {
            Object.keys(dataHomeZoneWheel).length ? 
            <Paper className={classes.paper}>
              <Button onClick={this.handleOpen}>Open HomeZone Wheel</Button>
              <Modal 
                open={this.state.open}
                handleClose={this.handleClose}
                dataHomeZoneWheel={dataHomeZoneWheel}
              />
            </Paper>
            :  
            ''
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
    areaInfluence: PropTypes.object.isRequired,
    dataHomeZoneWheel: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(RightContent);