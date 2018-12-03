export const styles = (theme) => ({
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        //backgroundColor: theme.palette.secondary.dark,
        backgroundColor: 'transparent',
        zIndex: 900,
        boxShadow: 'none'
        
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
        backgroundColor: '#212121'
    },
    hide: {
        display: 'none',
    },
    paper: {
        //padding: 5,
        // marginTop: 5,
        // marginBottom: 5,
        // marginLeft: 5,
        // marginRight: 5,
        width: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'none',
        backgroundColor: 'transparent'
        // backgroundColor: theme.palette.secondary.main
    },
    paperShift: {
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'paperShift-left': {
        marginLeft: theme.drawerWidthMain + 20,
    }
});