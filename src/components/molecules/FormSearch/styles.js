export const styles = (theme) => ({
  form: {
    width: '100%'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    '&:after': {
      borderBottom: '1px solid '+theme.palette.secondary.main
    }
  },
  textFieldFocused: {
    fontSize: 15
  },
  menuItem: {
    '&:hover': {
      fontSize: 15,
      color: theme.palette.secondary.light,
      border: theme.borderBotomColor.borderBotom
    }
  },
  iconSearch: {
    cursor: 'pointer',
  }
});