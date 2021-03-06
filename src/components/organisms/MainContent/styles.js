export const styles = (theme) => ({
    gridContainer: {
        height: '100%',
        //padding: 10
    },
    paper: {
        //padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 'calc(50% - 32px - 5px - 5px - 5px) !important'
        height: '100%'
    },
    separate: {
        height: 10
    },
    infoMessage: {
        backgroundColor: theme.palette.secondary.main,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
});