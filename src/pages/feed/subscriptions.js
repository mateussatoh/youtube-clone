import { Box, Button, Typography } from '@material-ui/core';
import { AccountCircle, Subscriptions } from '@material-ui/icons';

import Layout from '../../components/Layout/index';

import useStyles from './styles';

const SubscriptionsPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.wrapper}>
        <Box className={classes.box}>
          <Subscriptions
            classes={{
              root: classes.icon,
            }}
            fontSize="large"
          />
          <Box className={classes.box}>
            <Typography variant="h5">Não perca os novos vídeos</Typography>
            <Box marginTop="10px">
              <Typography variant="body1">
                Faça login para ver as atualizações dos seus canais favoritos do
                YouTube
              </Typography>
            </Box>
          </Box>

          <Button
            color="secondary"
            component="a"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default SubscriptionsPage;
