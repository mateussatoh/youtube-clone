import { Box, Grid, Avatar, Typography } from '@material-ui/core';

import Image from 'next/image';

import useStyles from './styles';
import Card from './Card';

const VideoCards = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default VideoCards;
