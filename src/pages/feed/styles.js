import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '85vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '110px',
    height: '110px',
    marginBottom: '10px',
  },
}));

export default useStyles;
