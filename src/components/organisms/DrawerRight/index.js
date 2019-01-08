import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, SnackbarContent } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { Scrollbars } from 'react-custom-scrollbars';

//Components
import RightContent from '../../organisms/RightContent';

//Styles
import { styles } from './styles';

const DrawerRight = (props) => {
    const { classes, anchor, open, dataTH, dataTC, dataAI, dataHW, totalDataTH } = props;
    return (
        <Drawer
            variant="persistent"
            anchor={anchor}
            open={open}
            classes={{
                paper: classes.drawerPaperRight,
            }}
        >
            {
                totalDataTH > 0 ?
                <Scrollbars>
                    <RightContent 
                        dataTH={dataTH} 
                        dataTC={dataTC}
                        dataAI={dataAI}
                        dataHW={dataHW}
                    /> 
                </Scrollbars>
                :
                <SnackbarContent
                    className={classes.info}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                        <InfoIcon className={classNames(classes.icon, classes.iconVariant)} />
                        There are not any information about this address!
                        </span>
                    }
                />
            }
    
        </Drawer>
    )
}


DrawerRight.propTypes = {
    classes: PropTypes.object.isRequired,
    anchor: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    dataTH: PropTypes.object.isRequired,
    dataTC: PropTypes.object.isRequired,
    dataAI: PropTypes.object.isRequired,
    dataHW: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DrawerRight);