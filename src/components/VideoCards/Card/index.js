import { Grid, Box, Avatar, Typography } from '@material-ui/core';
import Image from 'next/image';
import useStyles from './styles';

const Card = () => {
  const classes = useStyles();
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Box>
        <Image src="/hq720.webp" height={145} width={255} quality={100} />
      </Box>
      <Box
        display="flex"
        paddingTop="12px"
        paddingBottom="24px"
        maxWidth="230px"
      >
        <Box>
          <Avatar className={classes.avatar} src="/unnamed.jpg" />
        </Box>
        <Box>
          <Typography className={classes.caption}>
            Fizemos a BOLA de LÁPIS DE COR PERFEITA!
          </Typography>
          <Typography className={classes.description}>
            Manual do Mundo
          </Typography>
          <Typography className={classes.description}>
            1,5 mi de visualizações
          </Typography>
          <Typography className={classes.description}>há 2 dias</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Card;
