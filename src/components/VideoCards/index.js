import { Grid } from '@material-ui/core';

import Card from './Card';

const VideoCards = ({ popularVideos }) => {
  const videoItems = popularVideos.items;
  return (
    <Grid container>
      {videoItems.map((item) => (
        <Card property={item} />
      ))}
    </Grid>
  );
};

export default VideoCards;
