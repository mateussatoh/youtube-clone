import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';

import menuItems from './NavbarElements';

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
  {
    id: 3,
    label: 'Inscrições',
    path: 'subscriptions',
    icon: Subscriptions,
  },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History },
];

export const MainMenu = () => (
  <>
    {primaryMenu.map((item) => {
      const Icon = item.icon;
      return (
        <List>
          <ListItem>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </List>
      );
    })}
  </>
);

export const UserMenu = () => (
  <>
    {secondaryMenu.map((item) => {
      const Icon = item.icon;
      return (
        <List>
          <ListItem>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </List>
      );
    })}
  </>
);

export const SignupMenu = () => (
  <Box mx={4} my={2}>
    <Typography variant="body2">
      Faça login para curtur vídeos, comentar e se inscrever.
    </Typography>
    <Box mt={2}>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AccountCircle />}
      >
        Fazer login
      </Button>
    </Box>
  </Box>
);
