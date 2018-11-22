import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { styles } from './styles';


const Spinner = (props) => {

    const { classes } = props;
    
    return (
        <CircularProgress className={classes.progress} thickness={5} size={props.size}/>
    );
}


Spinner.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles, { withTheme: true })(Spinner);