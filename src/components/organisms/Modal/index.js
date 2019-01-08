import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Modal, Icon, Typography } from '@material-ui/core';
import  { Clear } from '@material-ui/icons';

//Components
import Spinner from '../../atoms/Spinner';
import WheelPlot from '../../molecules/WheelPlot';

//Styles
import { styles } from './styles';


const ModalComponent = (props) => {

    const { classes, dataHW, open, handleClose } = props;

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
            className={classes.Modal}
        >
            <div className={classes.PaperModal}>
                <div className={classes.iconContainer}>
                    <Icon onClick={handleClose}>
                        <Clear className={classes.icon}/>
                    </Icon>
                </div>
                <Typography variant="subtitle2" style={{ textAlign: 'center' }} noWrap>
                  HOMEZONE WHEEL
                </Typography>
                <Paper className={classes.Paper}>
                {
                    Object.keys(dataHW).length ? <WheelPlot dataHW={dataHW}/> : <Spinner size={40} />
                }
                </Paper>
            </div>
        </Modal>
    );
}

ModalComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    dataHW: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ModalComponent);