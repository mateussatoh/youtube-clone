import { Grid, Box, Avatar, Typography } from '@material-ui/core';
import Image from 'next/image';
import useStyles from './styles';

const Card = ({ property }) => {
  const { snippet } = property;
  const thumbnail = snippet.thumbnails;
  const avatar = snippet.channelThumb;
  const classes = useStyles();
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Box>
        <Image
          src={
            thumbnail.maxres
              ? thumbnail.maxres.url
              : thumbnail.standard
              ? thumbnail.standard.url
              : thumbnail.high
              ? thumbnail.high.url
              : thumbnail.medium.url
          }
          height={145}
          width={255}
          quality={100}
        />
      </Box>
      <Box
        display="flex"
        paddingTop="12px"
        paddingBottom="24px"
        maxWidth="230px"
      >
        <Box>
          <Avatar
            className={classes.avatar}
            src={avatar.high ? avatar.high.url : avatar.medium.url}
          />
        </Box>
        <Box>
          <Typography className={classes.caption}>{snippet.title}</Typography>
          <Typography className={classes.description}>
            {snippet.channelTitle}
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
