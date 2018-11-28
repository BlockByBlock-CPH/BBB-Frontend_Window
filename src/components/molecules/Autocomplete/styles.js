export const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    container: {
      position: 'relative',
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0,
    },
    suggestion: {
      display: 'block',
      boxShadow: theme.shadows[5],
      borderRadius: 0,
      '&:hover': {
        fontSize: 15,
        color: theme.palette.secondary.light,
        border: theme.borderBotomColor.borderBotom
      }
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
      height: theme.spacing.unit * 2,
    },
    textField: {
        width: 800,
        marginRight: 5
    },
    paper: {
        width: '94%',
        position: 'absolute',
        zIndex: 100,
        boxShadow: theme.shadows[5] 
    },
    menuItems: {
      boxShadow: theme.shadows[5] 
    }
  });