import Image from 'next/image';

import dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Grid, Box, Avatar, Typography } from '@material-ui/core';
import useStyles from './styles';

import formatViews from '../../../functions/formatViews';
import formatImage from '../../../functions/formatImage';

const Card = ({ property }) => {
  const { snippet } = property;

  dayjs.extend(relativeTime);
  dayjs.locale('pt-br');
  const day = dayjs(snippet.publishedAt).fromNow();

  const { thumbnails } = snippet;
  const { channelThumb } = snippet;
  const image = formatImage(thumbnails);

  const { statistics } = property;
  const views = formatViews(statistics);

  const classes = useStyles();
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Box>
        <Image
          objectFit="cover"
          src={image}
          height={135}
          width={240}
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
            src={
              channelThumb.high
                ? channelThumb.high.url
                : channelThumb.medium.url
            }
          />
        </Box>
        <Box>
          <Typography className={classes.caption}>{snippet.title}</Typography>
          <Typography className={classes.description}>
            {snippet.channelTitle}
          </Typography>
          <Typography className={classes.description}>{views}</Typography>
          <Typography className={classes.description}>{day}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Card;
