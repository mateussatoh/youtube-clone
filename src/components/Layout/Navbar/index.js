import { Hidden, Drawer, Box, Divider, Slide } from '@material-ui/core';

import { MainMenu, UserMenu, SignupMenu } from './elements';

import useStyles from './styles';

function NavBar() {
  const classes = useStyles();

  return (
    <Hidden mdDown>
      <Slide direction="right" in={1} mountOnEnter unmountOnExit>
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
      </Slide>
    </Hidden>
  );
}

export default NavBar;
