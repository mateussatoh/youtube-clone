import { Hidden, Drawer, Box, Divider } from '@material-ui/core';

import { MainMenu, UserMenu, SignupMenu } from './elements';

import useStyles from './styles';

function NavBar() {
  const classes = useStyles();

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        <Box height="100%" display="flex" flexDirection="column">
          <MainMenu />
          <Divider />
          <UserMenu />
          <Divider />
          <SignupMenu />
        </Box>
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
