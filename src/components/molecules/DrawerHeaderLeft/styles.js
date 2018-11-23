export const styles = (theme) => ({    
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      boxShadow: theme.shadows[5],
      backgroundColor: theme.palette.secondary.dark,
      ...theme.mixins.toolbar
    },
    Logo: {
      margin: 'auto',
      display: 'block',
      maxWidth: '20%',
      maxHeight: '20%',
      boxShadow: theme.shadows[5]
    }
});