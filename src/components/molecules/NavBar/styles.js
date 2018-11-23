export const styles = (theme) => ({
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: theme.palette.secondary.dark
    },
    appBarShift: {
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: theme.drawerWidthMain,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    }
});