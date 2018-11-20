import { grey } from '@material-ui/core/colors';

const drawerWidth = 300;

export const styles = (theme) => ({
  '@global': {
    'html, body, #root': {
        height: '100%'
    }
  },
  root: {
    flexGrow: 1,
    backgroundColor: grey[800],
    height: '100%'
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: 0,
    height: '100%'
  },
  contentChanged: {
    flexGrow: 1,
    backgroundColor: theme.mainContent.backgroundColor,
    //padding: theme.spacing.unit * 3,
    // padding: 10,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  PaperSpinner: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0
  }
});