import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Divider } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

//Components
import LeftContent from '../LeftContent';
//import FormSearch from '../../molecules/FormSearch';
import DrawerHeaderLeft from '../../molecules/DrawerHeaderLeft';

//Styles
import { styles } from './styles';

const DrawerLeft = (props) => {

    const { classes, anchor, open, handleDrawerClose, handleChangeSelecteDay, selectedDay } = props;
    
    return (
        <Drawer
            variant="persistent"
            anchor={anchor}
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <DrawerHeaderLeft handleDrawerClose={handleDrawerClose} />

            <Divider />
            
            <Scrollbars>
                <LeftContent 
                    handleChangeSelecteDay={handleChangeSelecteDay} 
                    selectedDay={selectedDay} 
                />
            </Scrollbars>
        </Drawer>
    )
}


DrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
    anchor: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
    handleChangeSelecteDay: PropTypes.func.isRequired,
    selectedDay: PropTypes.number.isRequired

};

export default withStyles(styles, { withTheme: true })(DrawerLeft);