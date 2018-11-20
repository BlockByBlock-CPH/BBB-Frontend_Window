export const styles = (theme) => ({
  drawerHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    backgroundColor: theme.drawerHeader.backgroundColor,
    ...theme.mixins.toolbar
  }
});