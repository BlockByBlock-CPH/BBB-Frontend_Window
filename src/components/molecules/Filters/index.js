import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuList, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { EventNote, Filter1, Filter2, Filter3, Filter4, Filter5, Filter6, Filter7 } from '@material-ui/icons';

import { styles } from './styles';



const Filters = ({ classes }) => {    
    return (
        <MenuList className={classes.menuList}>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <EventNote />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="All week" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <Filter1 />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Monday" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <Filter2 />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Tuesday" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <Filter3 />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Wednesday" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <Filter4 />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Thursday" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <Filter5 />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Friday" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <Filter6 />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Saturday" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <Filter7 />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Sunday" />
            </MenuItem>
        </MenuList>
    )
}

Filters.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles, { withTheme: true })(Filters);