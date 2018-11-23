import { cyan } from '@material-ui/core/colors';

export const styles = (theme) => ({
    Paper: {
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    PaperButton: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button: {
        padding: '10px 30px'
    },
    Modal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    PaperModal: {
        position: 'absolute',
        width: '40%',
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        '&:focus':{
            border: '2px solid '+cyan.A400
        }
    }
});