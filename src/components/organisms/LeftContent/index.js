import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

//Components
import Filters from '../../molecules/Filters';

//Styles
import { styles } from './styles';


const LeftContent = (props) => {

    const { classes, selectedDay, handleChangeSelecteDay } = props;

    return (
        <Grid item sm={12} className={classes.grid}>
            <Paper className={classes.paperFilters}>
                <Filters 
                    handleChangeSelecteDay={handleChangeSelecteDay} 
                    selectedDay={selectedDay} 
                />
            </Paper>
        </Grid> 
    )
}

LeftContent.propTypes = {
    classes: PropTypes.object.isRequired,
    handleChangeSelecteDay: PropTypes.func.isRequired,
    selectedDay: PropTypes.number.isRequired
};

export default withStyles(styles, { withTheme: true })(LeftContent);