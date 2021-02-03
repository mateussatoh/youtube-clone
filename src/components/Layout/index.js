import Head from 'next/head';

import { makeStyles } from '@material-ui/core';

import Topbar from './Topbar';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: 'auto',
    overflow: 'hidden',
    width: 'auto',
  },

  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 80,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'hidden',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>YouTube</title>
      </Head>
      <div className={classes.root}>
        <Topbar />
        <Navbar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
