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
    getDataTopState,
    getAreaInfluenceState,
    getHomeZoneWheelPlotState
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
        //   dataAI: {},
        //   dataHW: {},
          loading: true,
          addressInfo: {},
          selectedAddress: false,
          //polygonZone: [],
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
        } else if(this.props.mainChart !== prevProps.mainChart){
            this.dataMainChart(this.props.mainChart);
        } else if(this.props.tableHome !== prevProps.tableHome){
            this.dataTableHome(this.props.tableHome);
        } else if(this.props.dataTop !== prevProps.dataTop){
            this.dataTop(this.props.dataTop);
        } 
        // else if(this.props.areaInfluence !== prevProps.areaInfluence){
        //     this.areaInfluence(this.props.areaInfluence);
        // } 
        // else if(this.state.selectedDay !== prevState.selectedDay){
        //     console.log("this.props.dataHomeZoneWheel: ",this.props.dataHomeZoneWheel);
        //     // this.homezoneWheel(this.props.dataHomeZoneWheel);
        // }
    }

    /** 
     * @param data: Address from input text
     * @description Get Address information from API (Geocoder), after set the information into addressInfo State
    */
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

    /**
     * @param data: Address informations got it from API (geocoder)
     * @description genertate the suggestion of addresses
     */
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

    /** 
     * @param data: mainChart state from redux
     * @description recieve mainChart state and prepare that information to send it as props to generate the main chart.
    */
    dataMainChart = (data) => {      
        let dataMC = Object.assign({}, data);
            
        if(this.props.selectedDay > 0){    
            this.setState({ dataMC });
        }else if(this.props.selectedDay === 0){
            dataMC.title = { "0": "DAYS OF THE WEEK" };
            this.setState({ dataMC });
        }        
    }

    /**
     * @param data: tableHome state from redux
     * @description recieve tableHome state and prepare that information to send it as props to generate the table.
     */
    dataTableHome = (data) => {      
        let dataTH = { td: data.td };

        if(this.props.selectedDay > 0){
            dataTH.th = ["","DAY","HOUR","PEOPLE"];
        }else if(this.props.selectedDay === 0){
            dataTH.th = ["","DAY","PEOPLE"];        
        };        
        this.setState({ dataTH });
    }

    /**
     * @param data: dataTop state from redux
     * @description recieve dataTop state and prepare that information to send it as props to generate the top Charts.
     */
    dataTop = (data) => {
        let dataChartTop1 = data.chart1;
        let dataChartTop2 = data.chart2;
        dataChartTop1.title = { "0": "TOP 5 MAX PEOPLE BY ZONE"};
        dataChartTop2.title = { "0": "TOP 5 MIN PEOPLE BY ZONE"};
        this.setState({ dataTC: { dataChartTop1, dataChartTop2 }});
    }

    /**
     * @param data: areaInfluence state from redux
     * @description recieve areaInfluence state and prepare that information to send it as props to show the info about area of influence.
     */
    // areaInfluence = (data) => {
    //     const dataAI = data;
    //     this.setState({ dataAI });
    // }

    /**
     * @param data: homezoneWheel state from redux
     * @description recieve homezoneWheel state and prepare that information to send it as props to show the Homezone Wheel Plot.
     */
    // homezoneWheel = (data) => {
    //     const dataHW = data;
    //     this.setState({ dataHW },
    //         () => {
    //             console.log("dataHW: ", dataHW);
    //         });
    // }

    /**
     * @param none
     * @description handle the open drawer left panel
     */
    handleDrawerOpen = () => {
        this.setState({ openLeft: true });
    }
    
    /**
     * @param none
     * @description handle the close drawer left panel
     */
    handleDrawerClose = () => {
        this.setState({ openLeft: false });
    }

    /**
     * @param event: behavior of the input Address
     * @description handle the changes of the input text (Address)
     */
    handleChange = (e) => {
        let searchTxt = e.target.value;
        this.setState({ 
            searchedAddress: searchTxt,
            suggestions: [],
            listActive: false,
            searched: false
        }); 
    }

    /**
     * @param event: behavior of the menu options days
     * @description handle the changes of the menu options days
     */
    handleChangeSelecteDay = (e) => {
        let selectedDay = e.target.value;
        this.setState({ 
            selectedDay: selectedDay          
        });    
    }

    /**
     * @param event: behavior of the suggestions options addresses
     * @description OnClick of AutocompleteComponent (suggesttions options adresses)
     */
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

    /**
     * @param event: behavior of the form (use preventDefault to avoid refresh the page)
     * @description handle the submit form to search the information about the specific address 
     * and generate and show all of the visualization (map, tables, charts, etc.)
     */
    handleClick = (event) => {
        event.preventDefault();              
        this.setState({
            searched: true,
            listActive: true
        });
    }

    render() {
        
        const { classes, setInitMap, initialMap, coordAddress, areaInfluence, dataHomeZoneWheel  } = this.props;
        const { anchorLeft, openLeft, anchorRight, openRight, appTitleHeader, titleRP, loading, 
                dataMC, dataTH, dataTC, searchedAddress, suggestions, listActive, selectedDay,
                selectedAddress, polygonZone } = this.state;

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
                        searchedAddress={searchedAddress}
                        suggestions={suggestions}
                        listActive={listActive}
                    />
                  
                    <DrawerLeft 
                        anchor={anchorLeft}
                        open={openLeft}
                        handleDrawerClose={this.handleDrawerClose}
                        handleChangeSelecteDay={this.handleChangeSelecteDay}
                        selectedDay={selectedDay}
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
                            //dataMC={dataMC}
                            //polygonZone={polygonZone} // ENVIAR Polygon para generar el circulo(polygono) original
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
                                areaInfluence={areaInfluence}
                                dataHomeZoneWheel={dataHomeZoneWheel}                                
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
    setChosenLocation: PropTypes.func.isRequired,
    setInitMap: PropTypes.func.isRequired,
    initialMap: PropTypes.object.isRequired,
    coordAddress: PropTypes.object.isRequired,
    //mainChart: PropTypes.object.isRequired,
    selectedDay: PropTypes.number.isRequired,
    tableHome: PropTypes.array.isRequired,
    dataTop: PropTypes.object.isRequired,
    areaInfluence: PropTypes.object.isRequired,
    dataHomeZoneWheel: PropTypes.object.isRequired
};
  
function mapStateToProps({ address, map }) {
    return {
        initialMap: map.initialMap,
        coordAddress: getCoordAddressState(address),
        //mainChart: getMainChartState(address),
        selectedDay: getSelectedDayState(address),
        tableHome: getTableHomeState(address),
        dataTop: getDataTopState(address),
        areaInfluence: getAreaInfluenceState(address),
        dataHomeZoneWheel: getHomeZoneWheelPlotState(address)
    }
}

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps,{setInitMap,setChosenLocation})(HomeContainer)
);