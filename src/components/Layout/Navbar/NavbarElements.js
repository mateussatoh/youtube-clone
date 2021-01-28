import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from '@material-ui/core';

import {
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History,
  AccountCircle,
} from '@material-ui/icons';

import Link from 'next/link';

import useStyles from './styles';

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: Home },
  { id: 2, label: 'Em alta', path: '/feed/trending', icon: Whatshot },
  {
    id: 3,
    label: 'Inscrições',
    path: '/feed/subscriptions',
    icon: Subscriptions,
  },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', path: '/feed/library', icon: VideoLibrary },
  { id: 2, label: 'Histórico', path: '/feed/history', icon: History },
];

export const MainMenu = () => {
  const classes = useStyles();
  return (
    <>
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.path}>
              <ListItem classes={{ root: classes.listItem }} button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  classes={{
                    primary: classes.listItemText,
                  }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
};

export const UserMenu = () => {
  const classes = useStyles();
  return (
    <>
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.path}>
              <ListItem classes={{ root: classes.listItem }} button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  classes={{
                    primary: classes.listItemText,
                  }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
};

export const SignupMenu = () => (
  <Box mx={4} my={2}>
    <Typography variant="body2">
      Faça login para curtir vídeos, comentar e se inscrever.
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
