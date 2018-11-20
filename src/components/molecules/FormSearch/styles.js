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
  textField: {
    '&:hover': {
      borderBottom: '1px solid #008b8b'
    },
    '&:before': {
      borderBottom: 'none'
    },
    '&:after': {
        borderBottom: '1px solid #008b8b'
    }
  }
});