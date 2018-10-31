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

//Selectors
import { 
    getCoordAddressState, 
    getMainChartState, 
    getSelectedDayState, 
    getTableHomeState, 
    getDataTopState
} from '../../../redux/selectors/address_selector';

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
          dataTC: {},
          loading: true
        };
    }

    componentDidMount(){
        setTimeout(function() {
            this.setState({ loading: false});
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
        let dataMC = Object.assign({}, data);
            
        if(this.props.selectedDay > 0){    
            this.setState({ dataMC: dataMC });
        }else if(this.props.selectedDay === 0){
            dataMC.title = { "0": "Week" };
            this.setState({ dataMC: dataMC });
        }        
    }

    dataTableHome = (data) => {      
        let td = Object.assign({}, data);
        let dataTH = {};
        td = Object.keys(td).map(i => td[i])
        dataTH = {td};

        if(this.props.selectedDay > 0){
            dataTH.th = ["","Day","Hour","# People"];
        }else if(this.props.selectedDay === 0){
            dataTH.th = ["","Day","# People"];        
        };        
        this.setState({ dataTH: dataTH });
    }

    dataTop = (data) => {      
        let dataChartTop1 = Object.assign({}, data.chart1);
        let dataChartTop2 = Object.assign({}, data.chart2);
        dataChartTop1.title = { "0": "Top Max People by Zone"};
        dataChartTop2.title = { "0": "Top Min People by Zone"};
        this.setState({ dataTC: { dataChartTop1, dataChartTop2 }});
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
        
        const { classes, setInitMap, coordAddress, initialMap  } = this.props;
        const { anchorLeft, openLeft, anchorRight, openRight, appTitleHeader, titleRP, loading, searched, dataMC, dataTH, dataTC } = this.state;

        if(loading === true){
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
                        className={classNames(classes.content, classes[`content-${anchorLeft}`],
                        {
                            [classes.contentShift]: openLeft,
                            [classes[`contentShift-${anchorLeft}`]]: openLeft,
                            [classes.contentChanged]: searched,
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        
                        <MainContent 
                            searched={searched} 
                            setInitMap={setInitMap}
                            coordAddress={coordAddress}
                            initialMap={initialMap}
                            dataMC={dataMC}
                        />
                    </main>
                    { 
                        openRight === false ? null : 
                            <DrawerRight 
                                title={titleRP} 
                                anchor={anchorRight} 
                                open={openRight} 
                                dataTH={dataTH}
                                dataTC={dataTC}
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
    coordAddress: PropTypes.object.isRequired,
    initialMap: PropTypes.object.isRequired,
    mainChart: PropTypes.object.isRequired,
    selectedDay: PropTypes.number.isRequired,
    tableHome: PropTypes.object.isRequired,
    dataTop: PropTypes.object.isRequired,
    setInitMap: PropTypes.func.isRequired,
    searchAddress: PropTypes.func.isRequired
};
  
function mapStateToProps({ address, map }) {
    return {
        initialMap: map.initialMap,
        coordAddress: getCoordAddressState(address),
        mainChart: getMainChartState(address),
        selectedDay: getSelectedDayState(address),
        tableHome: getTableHomeState(address),
        dataTop: getDataTopState(address)
    }
}

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps,{setInitMap,searchAddress})(HomeContainer)
);