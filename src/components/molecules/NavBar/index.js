import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//Components
import FormSearch from '../FormSearch';

//Styles
import { styles } from './styles';

const NavBar = (props) => {

    const { classes, anchor, open, handleDrawerOpen, searchAddress, handleChange,
            searchedAddress, suggestions, listActive, selectAddress} = props;
    
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