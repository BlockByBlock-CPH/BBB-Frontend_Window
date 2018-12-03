import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
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
import { setChosenLocation } from '../../../redux/actions/address_action';

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

import { API_PHOTON } from '../../../constants/apis';

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
          loading: true,
          addressInfo: {},
          selectedAddress: false,
          polygonZone: [],
          totalDataMC: 1,
          totalDataTH: 1,
          searchedAddress: '',
          suggestions: [],
          listActive: false,
          selectedDay: 0
        };
    }

    componentDidMount(){
        setTimeout(function() {
            this.setState({ loading: false});
        }.bind(this), 1500)
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.state.searched !== prevState.searched){
            this.searchAddress(this.state.searchedAddress);
        } else if(this.props.mainChart !== prevProps.mainChart) {
            this.dataMainChart(this.props.mainChart);
        } else if(this.props.tableHome !== prevProps.tableHome){
            this.dataTableHome(this.props.tableHome);
        } else if(this.props.dataTop !== prevProps.dataTop){
            this.dataTop(this.props.dataTop);
        }
    }

    /** */
    searchAddress = (data) => {
        if(data !== '')
        {
          const API_GEOCODER = `${API_PHOTON}${this.state.searchedAddress}`;
          axios.get(API_GEOCODER)
          .then((response) => {
            let addressInfo = response.data.features.map(res => {
                return {
                    lon: parseFloat(res.geometry.coordinates[0],10),
                    lat: parseFloat(res.geometry.coordinates[1],10),
                    address:{
                        name:res.properties.name,
                        street: res.properties.street,
                        housenumber: res.properties.housenumber,
                        postcode:res.properties.postcode,
                        city:res.properties.city,
                        state:res.properties.state,
                        country:res.properties.country
                    },
                    original:{
                        formatted:res.properties.name,
                        details:res.properties
                    }
                }
            });
    
            this.makeSuggestions(addressInfo);
            this.setState({ addressInfo });
          })
          .catch((error) => {
            console.log(error);
          });
        }
    }
    
    makeSuggestions = (data) => {
        let list_suggestions = [];
        let suggestions = data.map((resp,index) =>{
            const country = (resp.address.country === undefined) ? '' : resp.address.country;
            const city = (resp.address.city === undefined) ? '' : resp.address.city+',';
            const street = (resp.address.street === undefined) ? '' : resp.address.street;
            const housenumber = (resp.address.housenumber === undefined) ? '' : resp.address.housenumber+',';
            const name = (resp.address.name === undefined) ? '' : resp.address.name+',';
            const longitude = resp.lon; 
            const latitude = resp.lat;
            
            list_suggestions = {id: index, coord: { longitude, latitude }, value: `${name} ${street} ${housenumber} ${city} ${country}`};

            return list_suggestions;
        });
    
        this.setState({ suggestions });
    }

    /** */

    dataMainChart = (data) => {      
        let dataMC = Object.assign({}, data);
            
        if(this.props.selectedDay > 0){    
            this.setState({ dataMC: dataMC });
        }else if(this.props.selectedDay === 0){
            dataMC.title = { "0": "DAYS OF THE WEEK" };
            this.setState({ dataMC: dataMC });
        }        
    }

    dataTableHome = (data) => {      
        let td = Object.assign({}, data);
        let dataTH = {};
        td = Object.keys(td).map(i => td[i])
        dataTH = {td};

        if(this.props.selectedDay > 0){
            dataTH.th = ["","DAY","HOUR","PEOPLE"];
        }else if(this.props.selectedDay === 0){
            dataTH.th = ["","DAY","PEOPLE"];        
        };        
        this.setState({ dataTH: dataTH });
    }

    dataTop = (data) => {      
        let dataChartTop1 = Object.assign({}, data.chart1);
        let dataChartTop2 = Object.assign({}, data.chart2);
        dataChartTop1.title = { "0": "TOP 5 MAX PEOPLE BY ZONE"};
        dataChartTop2.title = { "0": "TOP 5 MIN PEOPLE BY ZONE"};
        this.setState({ dataTC: { dataChartTop1, dataChartTop2 }});
    }

    handleDrawerOpen = () => {
        this.setState({ openLeft: true });
    }
    
    handleDrawerClose = () => {
        this.setState({ openLeft: false });
    }

    handleChange = (e) => {
        let searchTxt = e.target.value;
        this.setState({ 
            searchedAddress: searchTxt,
            suggestions: [],
            listActive: false,
            searched: false
        }); 
    }

    handleChangeSelecteDay = (e) => {
        let selectedDay = e.target.value;
        this.setState({ 
            selectedDay: selectedDay          
        });    
    }

    //OnClick AutocompleteComponent
    selectAddress = (event) => {
        const suggestions = [...this.state.suggestions];
        const { selectedDay } = this.state;
        const selectAddress = suggestions.filter(s => s.id === parseInt(event.target.id,10));

        this.props.setChosenLocation(selectAddress[0].coord, selectedDay);
        
        this.setState({ 
            //selectedCoord: selectAddress[0].coord,
            listActive: false,
            openRight: true,
            openLeft: true,
            selectedAddress: true,
            searched: false,
            suggestions: []
        });
    }

    handleClick = (event) => {
        event.preventDefault();              
        this.setState({
            searched: true,
            listActive: true
        });        
    }

    render() {
        
        const { classes, setInitMap, initialMap, coordAddress  } = this.props;
        const { anchorLeft, openLeft, anchorRight, openRight, appTitleHeader, titleRP, loading, 
                dataMC, dataTH, dataTC, searchedAddress, suggestions, listActive, selectedDay,
                selectedAddress, polygonZone, totalDataMC, totalDataTH } = this.state;

        if(loading === true){
            return (
                <Paper className={classes.PaperSpinner}>
                    <Spinner size={80} />
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
                        searchAddress={this.handleClick}
                        handleChange={this.handleChange}
                        selectAddress={this.selectAddress}
                        handleChangeSelecteDay={this.handleChangeSelecteDay}
                        searchedAddress={searchedAddress}
                        suggestions={suggestions}
                        listActive={listActive}
                        selectedDay={selectedDay}
                    />
                  
                    <DrawerLeft 
                        anchor={anchorLeft}
                        open={openLeft}
                        handleDrawerClose={this.handleDrawerClose}
                        dataTC={dataTC}
                    />
                    <main
                        className={classNames(classes.content, classes[`content-${anchorLeft}`],
                        {
                            [classes.contentShift]: openLeft,
                            [classes[`contentShift-${anchorLeft}`]]: openLeft,
                            [classes.contentChanged]: selectedAddress,
                        })}
                    >
                        {/* <div className={classes.drawerHeader} /> */}
                        
                        <MainContent 
                            selectedAddress={selectedAddress} 
                            setInitMap={setInitMap}
                            coordAddress={coordAddress}
                            initialMap={initialMap}
                            dataMC={dataMC}
                            polygonZone={polygonZone}
                            totalDataMC={totalDataMC}
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
                                totalDataTH={totalDataTH}
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
    tableHome: PropTypes.array.isRequired,
    dataTop: PropTypes.object.isRequired,
    setInitMap: PropTypes.func.isRequired,
    setChosenLocation: PropTypes.func.isRequired
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
    connect(mapStateToProps,{setInitMap,setChosenLocation})(HomeContainer)
);