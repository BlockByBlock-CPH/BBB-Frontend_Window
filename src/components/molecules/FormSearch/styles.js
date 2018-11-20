export const styles = () => ({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '100%',
    '&:hover': {
      // background: '#BDBDBD',
      // color: '#008b8b'
    }
  },
  textField: {
    '&:hover': {
      borderBottom: '1px solid #008b8b',
      color: '#008b8b'
    },
    '&:before': {
      borderBottom: 'none'
    },
    '&:after': {
        borderBottom: '1px solid #008b8b'
    }
  },
  menuItem: {
    '&:hover': {
      color: '#008b8b'
    }
  },
  iconSearch: {
    cursor: 'pointer'
  }
});