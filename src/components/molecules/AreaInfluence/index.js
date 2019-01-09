import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { styles } from './styles';

const AreaInfluence  = (props) => {

    const { classes, areaInfluence  } = props;
        
    return (
        <Fragment>
            <Typography variant="h4" noWrap>
                AREA OF INFLUENCE
            </Typography>
            <Typography variant="subtitle2" className={classes.typographyValue} noWrap>
                {areaInfluence[0].area} km<sup>2</sup>
            </Typography>
        </Fragment>
    )
}

AreaInfluence.propTypes = {
  classes: PropTypes.object.isRequired,
  areaInfluence: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaInfluence);