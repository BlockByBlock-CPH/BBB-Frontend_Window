import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, MenuItem, Typography } from '@material-ui/core';
import  { Search } from '@material-ui/icons';

import Autocomplete from '../../molecules/Autocomplete';

import { styles } from './styles';
import { listDays } from './constants';

const FormSearch = ({ classes, searchAddress, handleChange, searchedAddress, suggestions, listActive, 
    selectAddress, selectedDay, handleChangeSelecteDay }) => {    
   
    return (
        <form onSubmit={searchAddress} noValidate autoComplete="off">
            <TextField 
                required
                type="search" 
                placeholder="SEARCH ADDRESS"
                margin="normal"
                fullWidth={true} 
                id="searchAddress"   
                onChange={handleChange}
                value={searchedAddress}  
                InputProps={{ classes: { underline: classes.textField } }} 
            />
            {
                listActive === false ? null : <Autocomplete suggestions={suggestions} selectAddress={selectAddress}/>
            }
            <TextField
                select 
                value={selectedDay}
                onChange={handleChangeSelecteDay}
                label="" 
                helperText="" 
                margin="normal"
                fullWidth={true}
                id="selectDay"
                InputProps={{ classes: { underline: classes.textField } }} 
            >
            {
                listDays.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
            }
            </TextField>
            <div className={classes.buttonContainer}>
                <Button
                className={classes.button}
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    id="btnSearch"
                >
                    <Search /> 
                    <Typography align="center" variant="subtitle1" id="modal-title">
                    Search
                    </Typography>
                </Button>
            </div>
            
        </form>
    )
    
}

FormSearch.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles, { withTheme: true })(FormSearch);

  
  
  