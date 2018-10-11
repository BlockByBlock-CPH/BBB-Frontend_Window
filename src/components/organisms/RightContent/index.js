import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, Modal, Typography } from '@material-ui/core';

//Components
import TableBBB from '../../molecules/Table';
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

    const { classes } = this.props;

    return (
        <Grid item sm={12}>
            <Paper className={classes.Paper}>
                <TableBBB />
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
            >
                <div className={classes.paperModal}>
                    <Typography align="center" variant="h5" id="modal-title">
                        Top 5
                    </Typography>
                    <Paper className={classes.Paper}>
                    <HBarChart />
                    </Paper>
                    <Paper className={classes.Paper}>
                        <HBarChart />
                    </Paper>
                </div>
            </Modal>
        </Grid> 
    )
  }
}

RightContent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(RightContent);