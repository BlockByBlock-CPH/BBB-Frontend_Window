import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, MenuItem, InputAdornment, Icon } from '@material-ui/core';
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
                InputProps={{ 
                    classes: { underline: classes.textField, focused: classes.textFieldFocused }, 
                    endAdornment:( 
                        <InputAdornment position={'end'}>
                            <Icon>
                                <Search className={classes.iconSearch} onClick={searchAddress}/>
                            </Icon>
                        </InputAdornment>
                    )
                }} 
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
                InputProps={{ classes: { underline: classes.textField, focused: classes.textFieldFocused } }} 
            >
            {
                listDays.map(option => (
                    <MenuItem key={option.value} value={option.value} className={classes.menuItem}>
                        {option.label}
                    </MenuItem>
                ))
            }
            </TextField>
            {/* <div className={classes.buttonContainer}>
                <Button
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    id="btnSearch"
                >
                    Search
                </Button>
            </div> */}
            
        </form>
    )
    
}

FormSearch.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles, { withTheme: true })(FormSearch);