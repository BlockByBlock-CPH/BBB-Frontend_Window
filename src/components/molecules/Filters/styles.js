export const styles = theme => ({
    menuList: {
        paddingTop: 0,
        paddingBottom: 0
    },
    menuItem: {
        height: 16,
        padding: 5,
        boxShadow: 'none',
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
            color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
  });