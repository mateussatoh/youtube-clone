import { Grid, Box, Avatar, Typography } from '@material-ui/core';
import Image from 'next/image';
import dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import useStyles from './styles';

const Card = ({ property }) => {
  dayjs.extend(relativeTime);
  dayjs.locale('pt-br');

  const { snippet } = property;
  const { statistics } = property;
  const thumbnail = snippet.thumbnails;
  const avatar = snippet.channelThumb;
  const day = dayjs(snippet.publishedAt).fromNow();

  const formatViews = () => {
    const charViews = statistics.viewCount;
    const { length } = charViews;
    let format;

    if (length === 10) {
      format = `${charViews.charAt(0)},${charViews.charAt(
        1,
      )} bi de visualizações`;
    } else if (length === 9) {
      format = `${charViews.charAt(0)}${charViews.charAt(1)}${charViews.charAt(
        2,
      )} mi de visualizações`;
    } else if (length === 8) {
      format = `${charViews.charAt(0)}${charViews.charAt(
        1,
      )} mi de visualizações`;
    } else if (length === 7) {
      format = `${charViews.charAt(0)},${charViews.charAt(
        1,
      )} mi de visualizações`;
    } else if (length === 6) {
      format = `${charViews.charAt(0)}${charViews.charAt(1)}${charViews.charAt(
        2,
      )} mil visualizações`;
    } else if (length === 5) {
      format = `${charViews.charAt(0)}${charViews.charAt(1)} mil visualizações`;
    } else if (length === 4) {
      format = `${charViews.charAt(0)} mil visualizações`;
    } else if (length === 3) {
      format = `${charViews.charAt(0)}${charViews.charAt(1)}${charViews.charAt(
        2,
      )} visualizações`;
    } else if (length === 2) {
      format = `${charViews.charAt(0)}${charViews.charAt(1)} visualizações`;
    } else if (length === 1) {
      format = `${charViews.charAt(0)} visualizações`;
    }

    return format;
  };

  const classes = useStyles();
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Box>
        <Image
          objectFit="cover"
          src={
            thumbnail.maxres
              ? thumbnail.maxres.url
              : thumbnail.standard
              ? thumbnail.standard.url
              : thumbnail.high
              ? thumbnail.high.url
              : thumbnail.medium.url
          }
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
            src={avatar.high ? avatar.high.url : avatar.medium.url}
          />
        </Box>
        <Box>
          <Typography className={classes.caption}>{snippet.title}</Typography>
          <Typography className={classes.description}>
            {snippet.channelTitle}
          </Typography>
          <Typography className={classes.description}>
            {formatViews()}
          </Typography>
          <Typography className={classes.description}>{day}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Card;
