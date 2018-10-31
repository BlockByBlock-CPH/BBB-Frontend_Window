import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Divider } from '@material-ui/core';

//Components
import RightContent from '../../organisms/RightContent';
import DrawerHeaderRight from '../../molecules/DrawerHeaderRight';

//Styles
import { styles } from './styles';

const DrawerRight = (props) => {
    const { classes, anchor, open, title, dataTH, dataTC } = props;
    return (
        <Drawer
            variant="persistent"
            anchor={anchor}
            open={open}
            classes={{
                paper: classes.drawerPaperRight,
            }}
        >
            <DrawerHeaderRight title={title} />
    
            <Divider />  
    
            <RightContent 
                dataTH={dataTH} 
                dataTC={dataTC}
            />
    
        </Drawer>
    )
}


DrawerRight.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    anchor: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    dataTH: PropTypes.object.isRequired,
    dataTC: PropTypes.object.isRequired

};

export default withStyles(styles, { withTheme: true })(DrawerRight);