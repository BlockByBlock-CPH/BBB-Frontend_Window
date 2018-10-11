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
          dataBC: null
        };
    }

    componentDidUpdate(prevProps) {
        //Typical usage (don't forget to compare props):
        if(this.props.gdBarChart !== prevProps.gdBarChart) {
            this.dataBarChart(this.props.gdBarChart);
        }
    }

    dataBarChart = (data) => {      
        const dataInfo = data;
        let series = [];
        let labels = [];
        let title = '';

        dataInfo.features.map(d => {
            series.push(d.properties.people);
            labels.push(d.properties.hours_act);
            title = d.properties.name_day;
        });
        let dataBC = {series,labels,title};
        this.setState({ dataBC: dataBC });
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
      
              <RightContent />
      
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
                            dataBC={this.state.dataBC}
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
        gdBarChart: state.address.geodata
    }
  }

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps,{setInitMap,searchAddress})(HomeContainer)
);


  

