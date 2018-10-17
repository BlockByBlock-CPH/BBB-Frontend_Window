import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, MenuItem } from '@material-ui/core';

import { styles } from './styles';
import { listDays } from './constants';

class FormSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            dayValue: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({dayValue: event.target.value});
    }
    
    render() {
        const { classes, searchAddress } = this.props;
        return (
            <form className={classes.Form} noValidate autoComplete="off" onSubmit={searchAddress}>
                <TextField 
                    type="search" 
                    label="Search Address"
                    margin="normal"
                    fullWidth={true} 
                    id="searchAddress"               
                />
                <TextField 
                    select 
                    value={this.state.dayValue}
                    onChange={this.handleChange}
                    label="" 
                    helperText="" 
                    margin="normal"
                    fullWidth={true}
                    id="selectDay"
                >
                {
                    listDays.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))
                }
                </TextField>
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    id="btnSearch"
                >
                    Search
                </Button>
            </form>
        )
    }
}

FormSearch.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles, { withTheme: true })(FormSearch);

  
  
  