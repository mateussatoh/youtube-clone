import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 255,
    height: 255,
  },
  image: {
    flex: 1,
    maxHeight: 145,
  },
  details: {
    flex: 1,
    maxHeight: 110,
  },
}));

export default useStyles;
