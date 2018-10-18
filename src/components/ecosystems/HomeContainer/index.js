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

    // dataMainChart = (data) => {      
    //     const dataInfo = data.features;
    //     let dataMC = {};
    //     // const size = parseInt(Object.keys(dataInfo).length,10);
    //     if(this.props.selectedDay > 0){    
    //         dataMC = dataInfo.map(d => {
    //             return {
    //                 series: d.properties.people,
    //                 labels: d.properties.hours_act,
    //                 title: d.properties.name_day
    //             }
    //         });
    //     }else if(this.props.selectedDay === 0){
    //         dataMC = dataInfo.map(d => {
    //             return {
    //                 series: d.properties.people,
    //                 labels: d.properties.name_day,
    //                 title: d.properties.name_day
    //             }
    //         });
    //     }

    //     this.setState({ dataMC2: dataMC });
    // }

    dataMainChart = (data) => {      
        const dataInfo = data.features;
        let dataMC = {};
        let serie0 = [];
        let serie1 = [];
        let serie2 = [];
        let serie3 = [];
        let serie4 = [];
        let serie5 = [];
        let serie6 = [];
        let serie7 = [];
        let serie8 = [];
        let serie9 = [];
        let serie10 = [];
        let serie11 = [];
        let serie12 = [];
        let serie13 = [];
        let serie14 = [];
        let serie15 = [];
        let serie16 = [];
        let serie17 = [];
        let serie18 = [];
        let serie19 = [];
        let serie20 = [];
        let serie21 = [];
        let serie22 = [];
        let serie23 = [];
        
        if(this.props.selectedDay > 0){    
            dataMC = dataInfo.map(d => {
                return {
                    series: d.properties.people,
                    labels: d.properties.hours_act,
                    title: d.properties.name_day
                }
            });
            // dataMC = [
            //     {series: 409, labels: 0, title: "WEDNESDAY"},
            //     {series: 340, labels: 1, title: "WEDNESDAY"},
            //     {series: 387, labels: 2, title: "WEDNESDAY"},
            //     {series: 479, labels: 3, title: "WEDNESDAY"},
            //     {series: 633, labels: 4, title: "WEDNESDAY"},
            //     {series: 928, labels: 5, title: "WEDNESDAY"},
            //     {series: 1438, labels: 6, title: "WEDNESDAY"},
            //     {series: 1983, labels: 7, title: "WEDNESDAY"},
            //     {series: 2372, labels: 8, title: "WEDNESDAY"},
            //     {series: 2648, labels: 9, title: "WEDNESDAY"},
            //     {series: 2825, labels: 10, title: "WEDNESDAY"},
            //     {series: 2890, labels: 11, title: "WEDNESDAY"},
            //     {series: 2907, labels: 12, title: "WEDNESDAY"},
            //     {series: 2835, labels: 13, title: "WEDNESDAY"},
            //     {series: 2648, labels: 14, title: "WEDNESDAY"},
            //     {series: 2364, labels: 15, title: "WEDNESDAY"},
            //     {series: 2099, labels: 16, title: "WEDNESDAY"},
            //     {series: 1925, labels: 17, title: "WEDNESDAY"},
            //     {series: 1718, labels: 18, title: "WEDNESDAY"},
            //     {series: 1459, labels: 19, title: "WEDNESDAY"},
            //     {series: 1186, labels: 20, title: "WEDNESDAY"},
            //     {series: 853, labels: 21, title: "WEDNESDAY"},
            //     {series: 651, labels: 22, title: "WEDNESDAY"},
            //     {series: 531, labels: 23, title: "WEDNESDAY"}
            // ];
            this.setState({ dataMC: dataMC });
        }else if(this.props.selectedDay === 0){

            dataInfo.forEach(d => {
                const hours = d.properties.hours_act;
                const dataChart = d.properties.people;

                if(hours === 0){
                    serie0.push(dataChart);
                }else if(hours === 1){
                    serie1.push(dataChart);
                }else if(hours === 2){
                    serie2.push(dataChart);
                }else if(hours === 3){
                    serie3.push(dataChart);
                }else if(hours === 4){
                    serie4.push(dataChart);
                }else if(hours === 5){
                    serie5.push(dataChart);
                }else if(hours === 6){
                    serie6.push(dataChart);
                }else if(hours === 7){
                    serie7.push(dataChart);
                }else if(hours === 8){
                    serie8.push(dataChart);			
                }else if(hours === 9){
                    serie9.push(dataChart);
                }else if(hours === 10){
                    serie10.push(dataChart);
                }else if(hours === 11){
                    serie11.push(dataChart);
                }else if(hours === 12){
                    serie12.push(dataChart);
                }else if(hours === 13){
                    serie13.push(dataChart);			
                }else if(hours === 14){
                    serie14.push(dataChart);
                }else if(hours === 15){
                    serie15.push(dataChart);
                }else if(hours === 16){
                    serie16.push(dataChart);
                }else if(hours === 17){
                    serie17.push(dataChart);
                }else if(hours === 18){
                    serie18.push(dataChart);
                }else if(hours === 19){
                    serie19.push(dataChart);
                }else if(hours === 20){
                    serie20.push(dataChart);
                }else if(hours === 21){
                    serie21.push(dataChart);
                }else if(hours === 22){
                    serie22.push(dataChart);
                }else if(hours === 23){
                    serie23.push(dataChart);
                }
            });
            
            serie0 = Object.assign({},serie0);
            serie1 = Object.assign({},serie1);
            serie2 = Object.assign({},serie2);
            serie3 = Object.assign({},serie3);
            serie4 = Object.assign({},serie4);
            serie5 = Object.assign({},serie5);
            serie6 = Object.assign({},serie6);
            serie7 = Object.assign({},serie7);
            serie8 = Object.assign({},serie8);
            serie9 = Object.assign({},serie9);
            serie10 = Object.assign({},serie10);
            serie11 = Object.assign({},serie11);
            serie12 = Object.assign({},serie12);
            serie13 = Object.assign({},serie13);
            serie14 = Object.assign({},serie14);
            serie15 = Object.assign({},serie15);
            serie16 = Object.assign({},serie16);
            serie17 = Object.assign({},serie17);
            serie18 = Object.assign({},serie18);
            serie19 = Object.assign({},serie19);
            serie20 = Object.assign({},serie20);
            serie21 = Object.assign({},serie21);
            serie22 = Object.assign({},serie22);
            serie23 = Object.assign({},serie23);
            const labels = Object.assign({},['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
            const title = Object.assign({},['Week']);
            dataMC = {
                series: {
                    serie0,serie1,serie2,serie3,serie4,serie5,serie6,serie7,serie8,serie9,serie10,serie11,serie12,serie13,serie14,
                    serie15,serie16,serie17,serie18,serie19,serie20,serie21,serie22,serie23},
                labels,
                title
                };
            // dataMC = {
            //     series:{
            //         serie0:{0: 980, 1: 409, 2: 409, 3: 409, 4: 1678, 5: 1869, 6: 1009},
            //         serie1:{0: 753, 1: 340, 2: 340, 3: 340, 4: 1185, 5: 1279, 6: 795},
            //         serie2:{0: 831, 1: 387, 2: 387, 3: 387, 4: 1178, 5: 1125, 6: 997},
            //         serie3:{0: 1037, 1: 479, 2: 479, 3: 479, 4: 1524, 5: 1422, 6: 1264},
            //         serie4:{0: 1386, 1: 633, 2: 633, 3: 633, 4: 2091, 5: 1699, 6: 1475},
            //         serie5:{0: 1964, 1: 928, 2: 928, 3: 928, 4: 3031, 5: 1956, 6: 1514},
            //         serie6:{0: 3087, 1: 1438, 2: 1438, 3: 1438, 4: 4667, 5: 2416, 6: 1605},
            //         serie7:{0: 4306, 1: 1983, 2: 1983, 3: 1983, 4: 6364, 5: 3384, 6: 1768},
            //         serie8:{0: 5075, 1: 2372, 2: 2372, 3: 2372, 4: 7668, 5: 4825, 6: 2070},
            //         serie9:{0: 5572, 1: 2648, 2: 2648, 3: 2648, 4: 8762, 5: 6470, 6: 2416},
            //         serie10:{0: 5786, 1: 2825, 2: 2825, 3: 2825, 4: 9595, 5: 7983, 6: 2718},
            //         serie11:{0: 5849, 1: 2890, 2: 2890, 3: 2890, 4: 9996, 5: 9248, 6: 2885},
            //         serie12:{0: 5837, 1: 2907, 2: 2907, 3: 2907, 4: 10257, 5: 10186, 6: 2963},
            //         serie13:{0: 5663, 1: 2835, 2: 2835, 3: 2835, 4: 10046, 5: 10656, 6: 2937},
            //         serie14:{0: 5141, 1: 2648, 2: 2648, 3: 2648, 4: 9589, 5: 10368, 6: 2864},
            //         serie15:{0: 4409, 1: 2364, 2: 2364, 3: 2364, 4: 8947, 5: 9742, 6: 2904},
            //         serie16:{0: 3797, 1: 2099, 2: 2099, 3: 2099, 4: 8272, 5: 8403, 6: 2838},
            //         serie17:{0: 3438, 1: 1925, 2: 1925, 3: 1925, 4: 7679, 5: 7284, 6: 2728},
            //         serie18:{0: 3090, 1: 1718, 2: 1718, 3: 1718, 4: 6933, 5: 6192, 6: 2536},
            //         serie19:{0: 2690, 1: 1459, 2: 1459, 3: 1459, 4: 6017, 5: 5220, 6: 2202},
            //         serie20:{0: 2265, 1: 1186, 2: 1186, 3: 1186, 4: 4967, 5: 4437, 6: 1804},
            //         serie21:{0: 1832, 1: 853, 2: 853, 3: 853, 4: 3823, 5: 3629, 6: 1526},
            //         serie22:{0: 1600, 1: 651, 2: 651, 3: 651, 4: 2891, 5: 3030, 6: 1380},
            //         serie23:{0: 1437, 1: 531, 2: 531, 3: 531, 4: 2258, 5: 2509, 6: 1236}
            //         },
            //     labels:{
            //         0:"Monday",
            //         1:"Tuesday",
            //         2:"Wednesday",
            //         3:"Thursday",
            //         4:"Friday",
            //         5:"Saturday",
            //         6:"Sunday",
            //     },
            //     title:{
            //         0:"Week"
            //     }
            // };
            this.setState({ dataMC: dataMC });
        }        
    }

    dataTableHome = (data) => {      
        const dataInfo = data.features;
        let dataTH = {};
        let th = {};
        let td = {};
        let id = 0;
        
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
        
        // dataTH = {
        //     td: [
        //         {id: 1, day: "FRIDAY", people: 139418},
        //         {id: 2, day: "TUESDAY", people: 38508},
        //         {id: 3, day: "WEDNESDAY", people: 38508},
        //         {id: 4, day: "THURSDAY", people: 38508}
        //     ],
        //     th: [
        //         "",
        //         "Day",
        //         "# People"
        //     ]
        // };
        this.setState({ dataTH: dataTH });
    }


    dataTop = (data) => {      
        const dataInfo1 = data.chart1.features;
        const dataInfo2 = data.chart2.features;
        let dataChartTop1 = {};
        let dataChartTop2 = {};
                  
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
        
        const { classes, setInitMap, selectedInfo, initialMap  } = this.props;
        const { anchorLeft, openLeft, anchorRight, openRight, appTitleHeader, titleRP, loading, searched, dataMC, dataTH, dataTop } = this.state;

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
                            selectedInfo={selectedInfo}
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
                                dataTop={dataTop}
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
    selectedInfo: PropTypes.object.isRequired,
    initialMap: PropTypes.object.isRequired,
    mainChart: PropTypes.object.isRequired,
    selectedDay: PropTypes.number,
    tableHome: PropTypes.object.isRequired,
    dataTop: PropTypes.object.isRequired,
    setInitMap: PropTypes.func.isRequired,
    searchAddress: PropTypes.func.isRequired
};
  
function mapStateToProps({ address, map }) {
    return {
        selectedInfo: address.selectedInfo,
        initialMap: map.initialMap,
        mainChart: address.mainChart,
        selectedDay: address.selectedInfo.selectedDay,
        tableHome: address.tableHome,
        dataTop: address.dataTop
    }
}

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps,{setInitMap,searchAddress})(HomeContainer)
);