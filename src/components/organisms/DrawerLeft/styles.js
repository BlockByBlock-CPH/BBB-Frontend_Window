const drawerWidth = 300;

export const styles = (theme) => ({    
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
      backgroundColor: theme.drawer.backgroundColor
    },
    paperForm: {
      padding: '20px 5px 20px 5px',
      margin: 5,
      backgroundColor: theme.drawer.backgroundColor,
      boxShadow: 'none'

    }
});