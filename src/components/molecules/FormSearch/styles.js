import { cyan } from '@material-ui/core/colors';

const borderBotom = '1px solid '+cyan.A400;

export const styles = () => ({
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
      borderBottom: borderBotom,
      color: cyan.A400
    },
    '&:before': {
      borderBottom: 'none'
    },
    '&:after': {
        borderBottom: borderBotom
    }
  },
  menuItem: {
    '&:hover': {
      color: cyan.A400
    }
  },
  iconSearch: {
    cursor: 'pointer'
  }
});