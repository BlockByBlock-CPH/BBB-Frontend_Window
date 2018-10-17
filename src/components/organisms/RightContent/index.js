import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, Modal, Typography } from '@material-ui/core';

//Components
import TableBBB from '../../molecules/Table';
import HBarChart from '../../molecules/HBarChart';
import Spinner from '../../atoms/Spinner';

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

    const { classes, dataTH, dataTop } = this.props;

    return (
        <Grid item sm={12}>
            <Paper className={classes.Paper}>
            {
                Object.keys(dataTH).length ? <TableBBB dataTH={dataTH} /> : <Spinner />
            }
            </Paper>
            <Paper className={classes.PaperButton}>
                <Button 
                    className={classes.Button}
                    variant="contained" 
                    color="primary" 
                    type="button"
                    onClick={this.handleOpen}
                >See more</Button>
            </Paper>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                className={classes.Modal}
            >
                <div className={classes.PaperModal}>
                    <Typography align="center" variant="h5" id="modal-title">
                        Top 5
                    </Typography>
                    <Paper className={classes.Paper}>
                    {
                        Object.keys(dataTop).length ? <HBarChart dataTop={dataTop.dataChartTop1} /> : <Spinner />
                    }
                    </Paper>
                    <Paper className={classes.Paper}>
                    {
                        Object.keys(dataTop).length ? <HBarChart dataTop={dataTop.dataChartTop2} /> : <Spinner />
                    }
                    </Paper>
                </div>
            </Modal>
        </Grid> 
    )
  }
}

RightContent.propTypes = {
    classes: PropTypes.object.isRequired,
    dataTH: PropTypes.object.isRequired,
    dataTop: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(RightContent);