import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, Icon } from '@material-ui/core';
import  { Search } from '@material-ui/icons';

import Autocomplete from '../../molecules/Autocomplete';

import { styles } from './styles';


const FormSearch = ({ classes, searchAddress, handleChange, searchedAddress, suggestions, listActive, selectAddress }) => {    

    return (
        <form onSubmit={searchAddress} noValidate autoComplete="off" className={classes.form}>
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
        </form>
    )
    
}

FormSearch.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles, { withTheme: true })(FormSearch);