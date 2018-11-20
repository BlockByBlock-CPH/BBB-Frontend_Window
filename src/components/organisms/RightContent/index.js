import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, Typography } from '@material-ui/core';

//Components
import ModalTop from '../ModalTop';
import TableBBB from '../../molecules/Table';
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

    const { classes, dataTH, dataTC } = this.props;

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
                >
                    <Typography align="center" variant="subtitle1" id="modal-title">
                        See More
                    </Typography>
                </Button>
            </Paper>

            <ModalTop 
                dataTC={dataTC}
                handleClose={this.handleClose}
                open={this.state.open}
            />          
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