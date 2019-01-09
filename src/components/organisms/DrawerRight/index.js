import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

//Components
import RightContent from '../../organisms/RightContent';

//Styles
import { styles } from './styles';

const DrawerRight = (props) => {
    const { classes, anchor, open, dataTH, dataTC, areaInfluence, dataHomeZoneWheel } = props;
    return (
        <Drawer
            variant="persistent"
            anchor={anchor}
            open={open}
            classes={{
                paper: classes.drawerPaperRight,
            }}
        >
            <Scrollbars>
                <RightContent 
                    dataTH={dataTH} 
                    dataTC={dataTC}
                    areaInfluence={areaInfluence}
                    dataHomeZoneWheel={dataHomeZoneWheel}
                /> 
            </Scrollbars>    
        </Drawer>
    )
}


DrawerRight.propTypes = {
    classes: PropTypes.object.isRequired,
    anchor: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    dataTH: PropTypes.object.isRequired,
    dataTC: PropTypes.object.isRequired,
    areaInfluence: PropTypes.object.isRequired,
    dataHomeZoneWheel: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DrawerRight);