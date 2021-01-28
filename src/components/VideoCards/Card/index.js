import { Grid, Box, Avatar, Typography } from '@material-ui/core';
import Image from 'next/image';

const Card = () => (
  <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
    <Box>
      <Image src="/hq720.webp" height={145} width={255} quality={100} />
    </Box>
    <Box display="flex">
      <Box>
        <Avatar />
      </Box>
      <Box>
        <Typography>Fizemos a BOLA de LÁPIS DE COR PERFEITA!</Typography>
        <Typography>Manual do Mundo</Typography>
        <Typography>1,5 mi de visualizações</Typography>
        <Typography>há 2 dias</Typography>
      </Box>
    </Box>
  </Grid>
);

export default Card;
