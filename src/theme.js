import { createMuiTheme } from '@material-ui/core/styles';
import { grey, cyan } from '@material-ui/core/colors';

const boxShadow = '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)';

export const theme = createMuiTheme({
    palette: {
    },
    mainContent: {
        backgroundColor: grey[800]
    },
    drawer: {
        backgroundColor: grey[800]
    },
    drawerHeader: {
        backgroundColor: grey[900]
    },
    table: {
        color: grey[400],
        fontSize: '0.8rem',
        borderBottom: '1px solid '+ grey[800]
    },
    modalContainer: {
        backgroundColor: grey[800]
    },
    typography: {
        useNextVariants: true,
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        fontWeightMedium: 500,
        body1: {
          fontWeight: 500,
        },
        h4: {
            color: grey[200],
        },
        subtitle1: {
          fontSize: 16,
          color: grey[200]
        },
        button: {
          
        },
    },
    overrides: {
        // Name of the component ⚛️ / style sheet
        MuiButton: {
            // Name of the rule
            root: {
                width: '100%',
                height: 30,
                background: 'linear-gradient(15deg,'+ cyan.A400 +' 10%,'+ cyan.A700 +' 100%)',
                borderRadius: 4,
                border: 0,
                color: grey[200]+' !important',
                padding: '0 20px',
                boxShadow: boxShadow,
                fontSize: 14,
                fontWeight: 800
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: grey[900]
            }
        },
        MuiInputBase: {
            root: {
                color: grey[400],
                backgroundColor: grey[900],
                padding: '5px 15px',
                boxShadow: boxShadow,
                borderRadius: 4,
                fontSize: '0.8rem'
            }
        },
        MuiMenuItem: {
            root: {
                color: grey[400],
                backgroundColor: grey[800],
                padding: 10,
                borderBottom: '1px solid '+grey[900],
                boxShadow: boxShadow,
                fontSize: '0.8rem'
            }
        },
        MuiFormControl: {
            root: {
                flexDirection: 'initial',
                marginTop: '0 !important',
                marginBottom: '10px !important'
            }
        },
        MuiSvgIcon: {
            root: {
                color: cyan.A400+' !important',
                fontSize: 20
            }
        }
    }
});