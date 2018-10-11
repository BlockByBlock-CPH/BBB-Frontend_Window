import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, MenuItem } from '@material-ui/core';

import { styles } from './styles';
import { list_days } from './constants';

class FormSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            day_value: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({day_value: event.target.value});
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
                    id="search_address"               
                />
                <TextField 
                    select 
                    value={this.state.day_value}
                    onChange={this.handleChange}
                    label="Select Day" 
                    helperText="" 
                    margin="normal"
                    fullWidth={true}
                    id="select_day"
                >
                {
                    list_days.map(option => (
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
                    id="btn_search"
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

  
  
  