import Head from 'next/head';

import Topbar from './Topbar';
import Navbar from './Navbar';

import useStyles from './styles';

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
