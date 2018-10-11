import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

//Components
import Map from '../../molecules/Map';
import BarChart from '../../molecules/BarChart';

//Styles
import { styles } from './styles';


class MainContent extends Component {
    render(){

        const { classes, searched, setInitMap, selectedInfo, initialMap, dataBC } = this.props;

        return(
            <Grid container>
            {
                searched === true ? 
                    <Grid item sm={12}>
                        <Paper className={classes.PaperMap} style={{ height: '40vh'}}>    
                            <Map 
                                setInitMap={setInitMap}
                                selectedInfo={selectedInfo}
                                initialMap={initialMap}
                            />
                        </Paper>
                        <Paper className={classes.PaperChart} style={{ height: '40vh'}}>
                        {    
                            dataBC === null ? 'SPINNER' : <BarChart dataBC={dataBC} />
                        }                       
                        </Paper>
                    </Grid> 
                    : 
                    <Grid item sm={12}>
                        <Paper className={classes.Paper} style={{ height: '82vh'}}>    
                            <Map 
                                setInitMap={setInitMap}
                                selectedInfo={selectedInfo}
                                initialMap={initialMap}
                            />
                        </Paper>
                    </Grid>
            }
            </Grid>
        );
    }
}

MainContent.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles, { withTheme: true })(MainContent);