import { Grid } from '@material-ui/core';
import Card from './Card';

const VideoCards = ({ searchedVideos }) => {
  const searchItems = searchedVideos.items;

  return (
    <Grid container>
      {searchItems.map((item) => (
        <Card property={item} />
      ))}
    </Grid>
  );
};

export default VideoCards;
