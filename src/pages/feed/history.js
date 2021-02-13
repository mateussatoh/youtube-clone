import { Box, Button, Typography } from '@material-ui/core';
import { AccountCircle, History } from '@material-ui/icons';

import Layout from '../../components/Layout/index';

import useStyles from './styles';

const HistoryPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.wrapper}>
        <Box className={classes.box}>
          <History
            classes={{
              root: classes.icon,
            }}
            fontSize="large"
          />
          <Box className={classes.box}>
            <Typography variant="h5">Controle o que você assiste</Typography>
            <Box marginTop="10px">
              <Typography variant="body1">
                O histórico de exibição não é visível quando você está
                desconectado.
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

export default HistoryPage;
