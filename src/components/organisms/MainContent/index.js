import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Grid, Paper, SnackbarContent } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';


//Components
import Map from '../../molecules/Map';
import BarChart from '../../molecules/BarChart';
import Spinner from '../../atoms/Spinner';

//Styles
import { styles } from './styles';


const MainContent = (props) => {

    const { classes, selectedAddress, setInitMap, coordAddress, initialMap, dataMC, polygonZone, totalDataMC } = props;
    
    return(
        <Grid className={classes.gridContainer} container>
        {
            selectedAddress === true ? 
                <Grid item sm={12}>
                    <Paper className={classes.paper}>    
                        <Map 
                            setInitMap={setInitMap}
                            coordAddress={coordAddress}
                            initialMap={initialMap}
                            //polygonZone={polygonZone}
                        />
                    </Paper>
                    {/* <div className={classes.separate} />
                    <Paper className={classes.paper}>
                    {    
                        totalDataMC > 0 ?
                        (Object.keys(dataMC).length ? <BarChart dataMC={dataMC} /> : <Spinner size={40} />) :
                        <SnackbarContent
                            className={classes.infoMessage}
                            aria-describedby="client-snackbar"
                            message={
                                <span id="client-snackbar" className={classes.message}>
                                <InfoIcon className={classNames(classes.iconVariant)} />
                                There are not any information about this address!
                                </span>
                            }
                        />
                    }                        
                    </Paper> */}
                </Grid> 
                : 
                <Grid item sm={12}>
                    <Paper style={{ height: '100vh', margin: '-10px'}}>    
                        <Map 
                            setInitMap={setInitMap}
                            coordAddress={coordAddress}
                            initialMap={initialMap}
                        />
                    </Paper>
                </Grid>
        }
        </Grid>
    );
}

MainContent.propTypes = {
    classes: PropTypes.object.isRequired,
    selectedAddress: PropTypes.bool.isRequired,
    setInitMap: PropTypes.func.isRequired,
    coordAddress: PropTypes.object.isRequired,
    initialMap: PropTypes.object.isRequired,
    dataMC: PropTypes.object.isRequired

};


export default withStyles(styles, { withTheme: true })(MainContent);