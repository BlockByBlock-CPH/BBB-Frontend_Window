import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

//Components
import MainContent from '../../organisms/MainContent';
import DrawerLeft from '../../organisms/DrawerLeft';
import DrawerRight from '../../organisms/DrawerRight';
import Spinner from '../../atoms/Spinner';
import NavBar from '../../molecules/NavBar';

//Actions
import { setInitMap } from '../../../redux/actions/map_action';
import { searchAddress } from '../../../redux/actions/address_action';

//Styles
import { styles } from './styles';

class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          openLeft: false,
          anchorLeft: 'left',
          openRight: false,
          anchorRight: 'right',
          appTitleHeader: 'BlockByBlock',
          titleRP: 'More information',
          searched: false,
          dataMC: {},
          dataTH: {},
          dataTop: {},
          loading: true
        };
    }

    componentDidMount(){
        setTimeout(function() {
            this.setState({ loading: false });
        }.bind(this), 1500)
    }

    componentDidUpdate(prevProps) {
        if(this.props.mainChart !== prevProps.mainChart) {
            this.dataMainChart(this.props.mainChart);
        } else if(this.props.tableHome !== prevProps.tableHome){
            this.dataTableHome(this.props.tableHome);
        } else if(this.props.dataTop !== prevProps.dataTop){
            this.dataTop(this.props.dataTop);
        }
    }

    dataMainChart = (data) => {      
        const dataInfo = data.features;
        let dataMC = {};
        // const size = parseInt(Object.keys(dataInfo).length,10);
        if(this.props.selectedDay > 0){    
            dataMC = dataInfo.map(d => {
                return {
                    series: d.properties.people,
                    labels: d.properties.hours_act,
                    title: d.properties.name_day
                }
            });
        }else if(this.props.selectedDay === 0){
            dataMC = dataInfo.map(d => {
                return {
                    series: d.properties.people,
                    labels: d.properties.name_day,
                    title: d.properties.name_day
                }
            });
        }

        this.setState({ dataMC: dataMC });
    }

    dataTableHome = (data) => {      
        const dataInfo = data.features;
        let dataTH = {};
        let th = {};
        let td = {};
        let id = 0;
        // const size = parseInt(Object.keys(dataInfo).length,10);
        if(this.props.selectedDay > 0){
            td = dataInfo.map(d => {
                id += 1; 
                return {
                    id: id,
                    day:d.properties.name_day,
                    hour:d.properties.hours_act,
                    people:d.properties.count_act
                };
            });
            th = ['','Day','Hour', '# People'];
            dataTH = {td, th}
        }else if(this.props.selectedDay === 0){
            td = dataInfo.map(d => {
                id += 1;
                return {
                    id: id,
                    day: d.properties.name_day,
                    people: d.properties.people
                }        
            });
            th = ['','Day', '# People'];
            dataTH = {td, th};
        }
        
        this.setState({ dataTH: dataTH });
    }


    dataTop = (data) => {      
        const dataInfo1 = data.chart1.features;
        const dataInfo2 = data.chart2.features;
        let dataChartTop1 = {};
        let dataChartTop2 = {};
        // const size = parseInt(Object.keys(dataInfo).length,10);
          
        dataChartTop1 = dataInfo1.map(d => {
            return {
                labels: d.properties.id,
                series: d.properties.people,
                title: 'Top Max People by Zone'
            }
        });

        dataChartTop2 = dataInfo2.map(d => {
            return {
                labels: d.properties.id,
                series: d.properties.people,
                title: 'Top Min People by Zone'
            }
        });
        
        this.setState({ dataTop: { dataChartTop1, dataChartTop2 }});
    }

    handleDrawerOpen = () => {
        this.setState({ openLeft: true });
    }
    
    handleDrawerClose = () => {
        this.setState({ openLeft: false });
    }

    handleClick = (event) => {
        event.preventDefault();
        const address = event.target.searchAddress.value;
        const selectedDay = event.target.selectDay.value;
        this.props.searchAddress(address, selectedDay);  
        this.setState({
            searched: true,
            openRight: true,
            openLeft: false
        });
    }

    render() {
        
        const { classes } = this.props;
        const { anchorLeft, openLeft, anchorRight, openRight, appTitleHeader, titleRP } = this.state;

        if(this.state.loading === true){
            return (
                <Paper className={classes.PaperSpinner}>
                    <Spinner />
                </Paper>
            );
        }

        return (
            <div className={classes.root}>        
                <div className={classes.appFrame}>
                    <NavBar 
                        open={openLeft}
                        anchor={anchorLeft}
                        handleDrawerOpen={this.handleDrawerOpen}
                        title={appTitleHeader}
                    />
                    <DrawerLeft 
                        anchor={anchorLeft}
                        open={openLeft}
                        handleDrawerClose={this.handleDrawerClose}
                        searchAddress={this.handleClick}
                    />
                    <main
                        className={classNames(classes.content, classes[`content-${anchorLeft}`], {
                        [classes.contentShift]: openLeft,
                        [classes[`contentShift-${anchorLeft}`]]: openLeft,
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        
                        <MainContent 
                            searched={this.state.searched} 
                            setInitMap={this.props.setInitMap}
                            selectedInfo={this.props.selectedInfo}
                            initialMap={this.props.initialMap}
                            dataMC={this.state.dataMC}
                        />
                    </main>
                    { 
                        openRight === false ? null : 
                            <DrawerRight 
                                title={titleRP} 
                                anchor={anchorRight} 
                                open={openRight} 
                                dataTH={this.state.dataTH}
                                dataTop={this.state.dataTop}
                            /> 
                    }
                </div>
            </div>
        )
    }
}

HomeContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
function mapStateToProps(state) {
    return {
        selectedInfo: state.address.selectedInfo,
        initialMap: state.map.initialMap,
        mainChart: state.address.mainChart,
        selectedDay: state.address.selectedInfo.selectedDay,
        tableHome: state.address.tableHome,
        dataTop: state.address.dataTop
    }
}

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps,{setInitMap,searchAddress})(HomeContainer)
);


  

