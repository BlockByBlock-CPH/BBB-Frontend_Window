export const styles = (theme) => ({
  drawerHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.secondary.dark,
    ...theme.mixins.toolbar
  }
});