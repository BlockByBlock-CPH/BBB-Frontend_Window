import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, IconButton, Paper, TextField, InputAdornment, Icon, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import  { Search } from '@material-ui/icons';

//Components
import FormSearch from '../FormSearch';

//Styles
import { styles } from './styles';

const NavBar = (props) => {

    const { classes, anchor, open, title, handleDrawerOpen, searchAddress, handleChange,
        searchedAddress, suggestions, listActive, selectAddress, selectedDay, handleChangeSelecteDay } = props;
    
    return (
        <AppBar
            className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
            [classes[`appBarShift-${anchor}`]]: open,
            })}
        >
            <Toolbar disableGutters={!open}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                {/* <Typography className={classes.Typography} variant="h4" noWrap>
                    {title}
                </Typography> */}
                <Paper 
                    className={classNames(classes.paper, {
                        [classes.paperShift]: open,
                        [classes[`paperShift-${anchor}`]]: open,
                    })}
                >
                    <FormSearch 
                        searchAddress={searchAddress} 
                        handleChange={handleChange} 
                        searchedAddress={searchedAddress}
                        suggestions={suggestions}
                        listActive={listActive}
                        selectAddress={selectAddress}
                        selectedDay={selectedDay}
                        handleChangeSelecteDay={handleChangeSelecteDay}
                    /> 
                </Paper>
            </Toolbar>
                
        </AppBar>
    );
}


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    anchor: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);