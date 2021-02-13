import { Box, Button, Typography } from '@material-ui/core';
import { AccountCircle, VideoLibrary } from '@material-ui/icons';

import Layout from '../../components/Layout/index';

import useStyles from './styles';

const LibraryPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.wrapper}>
        <Box className={classes.box}>
          <VideoLibrary
            classes={{
              root: classes.icon,
            }}
            fontSize="large"
          />
          <Box className={classes.box}>
            <Typography variant="h5">
              Desfrute dos seus vídeos favoritos
            </Typography>
            <Box marginTop="10px">
              <Typography variant="body1">
                Faça login para acessar os vídeos salvos ou marcados com gostei
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

export default LibraryPage;
