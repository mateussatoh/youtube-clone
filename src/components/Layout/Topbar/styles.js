import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 6px 0px 15px',
    display: 'flex',
    alignItems: 'center',

    borderRadius: '3px',
    boxShadow: 'none',
    border: '1px solid rgba(0,0,0,0.2) ',

    height: 33,
    width: 620,
  },
  button: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
}));

export default useStyles;
