import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  avatar: {
    width: '38px',
    height: '38px',
    marginRight: '12px',
  },
  caption: {
    fontWeight: '500',
    fontSize: 14,
    marginBottom: '5px',
    color: 'black',

    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  description: {
    color: 'rgb(96,96,96)',
    fontSize: 14,
    lineHeight: 1.35,
  },
}));

export default useStyles;
