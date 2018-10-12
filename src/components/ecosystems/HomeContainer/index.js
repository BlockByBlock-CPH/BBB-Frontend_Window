import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

//Components
import MainContent from '../../organisms/MainContent';
import RightContent from '../../organisms/RightContent';
import FormSearch from '../../molecules/FormSearch';

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
          dataMC: null,
          dataTH: null
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.main_chart !== prevProps.main_chart) {
            this.dataMainChart(this.props.main_chart);
        } else if(this.props.table_home !== prevProps.table_home){
            this.dataTableHome(this.props.table_home);
        }
    }

    dataMainChart = (data) => {      
        const dataInfo = data.features;
        let dataMC = {};
        // const size = parseInt(Object.keys(dataInfo).length,10);
        if(this.props.selected_day > 0){    
            dataMC = dataInfo.map(d => {
                return {
                    series: d.properties.people,
                    labels: d.properties.hours_act,
                    title: d.properties.name_day
                }
            });
        }else if(this.props.selected_day === 0){
            dataMC = dataInfo.map(d => {
                return {
                    series: d.properties.people,
                    labels: d.properties.name_day,
                    title: d.properties.name_day
                }
            });
        }
        this.setState({ dataMC: dataMC }, () => {
            console.log("dataMC: ", this.state.dataMC);
        });
    }

    dataTableHome = (data) => {      
        const dataInfo = data.features;
        let dataTH = {};
        let th = {};
        let td = {};
        let id = 0;
        // const size = parseInt(Object.keys(dataInfo).length,10);
        if(this.props.selected_day > 0){  
            id += 1; 
            td = dataInfo.map(d => {
                return {
                    id: id,
                    day:d.properties.name_day,
                    hour:d.properties.hours_act,
                    people:d.properties.count_act
                };
            });
            th = ['','Day','Hour', '# People'];
            dataTH = {td, th}
        }else if(this.props.selected_day === 0){
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

    handleDrawerOpen = () => {
        this.setState({ openLeft: true });
    }
    
    handleDrawerClose = () => {
        this.setState({ openLeft: false });
    }

    handleClick = (event) => {
        event.preventDefault();
        const address = event.target.search_address.value;
        const selected_day = event.target.select_day.value;
        this.props.searchAddress(address, selected_day);  
        this.setState({
            searched: true,
            openRight: true,
            openLeft: false
        });
    }

    render() {
        
        const { classes } = this.props;
        const { anchorLeft, openLeft, anchorRight, openRight, appTitleHeader, titleRP } = this.state;

        const drawerLeft = (
            <Drawer
                variant="persistent"
                anchor={anchorLeft}
                open={openLeft}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <img className={classes.Logo} alt="logo" src={require('../../../assets/logo.jpg')} />
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                        {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                    </IconButton>
                </div>
                <Divider />
                <FormSearch searchAddress={this.handleClick}/> 
            </Drawer>
          );
      
          const drawerRight = (
            <Drawer
                variant="persistent"
                anchor={anchorRight}
                open={openRight}
                classes={{
                    paper: classes.drawerPaperRight,
                }}
            >
                <div className={classes.drawerHeaderRight}>
                    <Typography className={classes.Typography} variant="subtitle1" noWrap>
                    {titleRP}
                    </Typography>
                </div>
      
                <Divider />  
        
                <RightContent dataTH={this.state.dataTH}/>
      
            </Drawer>
          );

        return (
            <div className={classes.root}>        
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
                        [classes.appBarShift]: openLeft,
                        [classes[`appBarShift-${anchorLeft}`]]: openLeft,
                        })}
                    >
                        <Toolbar disableGutters={!openLeft}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, openLeft && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.Typography} variant="h4" noWrap>
                                {appTitleHeader}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                        {drawerLeft}
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
                            selectedInfo={this.props.selected_info}
                            initialMap={this.props.initial_map}
                            dataMC={this.state.dataMC}
                        />
                    </main>
                        {openRight === false ? null : drawerRight}
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
        selected_info: state.address.selected_info,
        initial_map: state.map.initial_map,
        main_chart: state.address.main_chart,
        selected_day: state.address.selected_info.selected_day,
        table_home: state.address.table_home
    }
}

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps,{setInitMap,searchAddress})(HomeContainer)
);


  

