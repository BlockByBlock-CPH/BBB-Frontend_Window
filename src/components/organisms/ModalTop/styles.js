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
        padding: '20px 30px 50px',
        '&:focus':{
            border: '2px solid '+theme.palette.primary.main
        }
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 0 10px 0'
    },
    icon: {
        fontSize: 30,
        cursor: 'pointer'
    },
    separate: {
        height: 10
    }
});