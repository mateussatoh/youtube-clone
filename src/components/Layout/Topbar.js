import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Paper,
  InputBase,
  IconButton,
  Button,
  Hidden,
} from '@material-ui/core';

import {
  Menu,
  Search,
  Apps,
  VideoCall,
  MoreVert,
  AccountCircle,
} from '@material-ui/icons';

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

    borderRadius: 0,

    height: 35,
    width: 600,
  },
  input: {
    flex: 1,
  },
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <Menu />
          <img
            src="/yt_logo_rgb_light.png"
            alt="logo"
            className={classes.logo}
          />
        </Box>

        <Box>
          <Paper component="form" className={classes.search}>
            <InputBase
              className={classes.input}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" aria-label="search">
              <Search />
            </IconButton>
          </Paper>
        </Box>

        <Hidden mdDown>
          <Box display="flex">
            <IconButton className={classes.icons}>
              <VideoCall />
            </IconButton>
            <IconButton className={classes.icons}>
              <Apps />
            </IconButton>
            <IconButton className={classes.icons}>
              <MoreVert />
            </IconButton>
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
            >
              Fazer Login
            </Button>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
