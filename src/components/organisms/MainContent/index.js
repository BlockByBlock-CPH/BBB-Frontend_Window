import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

//Components
import Map from '../../molecules/Map';
import BarChart from '../../molecules/BarChart';
import Spinner from '../../atoms/Spinner';

//Styles
import { styles } from './styles';


const MainContent = (props) => {

    const { classes, searched, setInitMap, coordAddress, initialMap, dataMC } = props;

    return(
        <Grid container>
        {
            searched === true ? 
                <Grid item sm={12}>
                    <Paper className={classes.PaperMap} style={{ height: '40vh'}}>    
                        <Map 
                            setInitMap={setInitMap}
                            coordAddress={coordAddress}
                            initialMap={initialMap}
                        />
                    </Paper>
                    <Paper className={classes.PaperChart} style={{ height: '40vh'}}>
                    {    
                        Object.keys(dataMC).length ? <BarChart dataMC={dataMC} /> : <Spinner /> 
                    }                       
                    </Paper>
                </Grid> 
                : 
                <Grid item sm={12}>
                    <Paper className={classes.Paper} style={{ height: '100vh'}}>    
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
    searched: PropTypes.bool.isRequired,
    setInitMap: PropTypes.func.isRequired,
    coordAddress: PropTypes.object.isRequired,
    initialMap: PropTypes.object.isRequired,
    dataMC: PropTypes.object.isRequired

};


export default withStyles(styles, { withTheme: true })(MainContent);