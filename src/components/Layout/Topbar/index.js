import {
  AppBar,
  Toolbar,
  Box,
  Paper,
  InputBase,
  IconButton,
  Button,
  Hidden,
  Divider,
} from '@material-ui/core';

import {
  Menu,
  Search,
  Apps,
  VideoCall,
  MoreVert,
  AccountCircle,
} from '@material-ui/icons';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'

import useStyles from './styles';

const Topbar = () => {
  const router = useRouter()
  const classes = useStyles();

  const handleSubmit = (event) => {
    const input = event.target.input.value
    event.preventDefault()
    router.push( router.pathname === '/' ? `search/${input}` : `${input}` )
  }

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <Menu button />
          <Link href="/">
            <img
              src="/yt_logo_rgb_light.png"
              alt="logo"
              className={classes.logo}
            />
          </Link>
        </Box>

        <Box>
          <Paper component="form" className={classes.search} onSubmit={handleSubmit}>
            <InputBase
            name='input'
              className={classes.input}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider orientation="vertical" flexItem />

            <IconButton
              type="submit"
              aria-label="search"
              className={classes.button}
              backgroundColor="rgb(0,0,0)"
            >
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
