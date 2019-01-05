import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuList, MenuItem, ListItemIcon } from '@material-ui/core';

import { styles } from './styles';
import { listDays } from './constants';



const Filters = (props) => {

    const { classes, selectedDay, handleChangeSelecteDay } = props;

    return (
        <MenuList 
            className={classes.menuList} 
            selected={selectedDay}
            onClick={handleChangeSelecteDay}
        >
        {
            listDays.map(option => (
                <MenuItem key={option.value} value={option.value} className={classes.menuItem} selected={option.value === selectedDay}>
                    <ListItemIcon className={classes.icon}>
                        <option.icon />
                    </ListItemIcon>
                    {option.label}
                </MenuItem>
            ))
        }
        </MenuList>
    )
}

Filters.propTypes = {
    classes: PropTypes.object.isRequired,
    handleChangeSelecteDay: PropTypes.func.isRequired,
    selectedDay: PropTypes.number.isRequired
};
  
export default withStyles(styles, { withTheme: true })(Filters);