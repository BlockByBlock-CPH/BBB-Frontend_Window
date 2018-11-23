export const styles = (theme) => ({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItem: {
    '&:hover': {
      fontSize: 16,
      color: theme.palette.primary.main,
      border: theme.borderBotomColor.borderBotom
    }
  },
  iconSearch: {
    cursor: 'pointer',
  }
});