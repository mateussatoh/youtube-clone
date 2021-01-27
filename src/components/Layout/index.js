import Head from 'next/head';

import { makeStyles } from '@material-ui/core';

import Topbar from './Topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
  },

  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
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
    overflow: 'auto',
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
        <h1>Sidebar</h1>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
