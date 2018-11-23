export const styles = (theme) => ({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    '&:hover': {
      // background: '#BDBDBD',
      // color: '#008b8b'
    }
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