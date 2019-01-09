import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';


//Components
import Map from '../../molecules/Map';

//Styles
import { styles } from './styles';


const MainContent = (props) => {

    const { classes, selectedAddress, setInitMap, coordAddress, initialMap,  polygonZone } = props;
    
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
    initialMap: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MainContent);