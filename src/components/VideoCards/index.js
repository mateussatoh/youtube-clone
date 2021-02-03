import { Grid } from '@material-ui/core';
import Card from './Card';

const VideoCards = ({ popularVideos, popularChannels }) => {
  const videoItems = popularVideos.items;
  const channelItems = popularChannels.items;

  const channelItemsMap = channelItems.map((item) => item);
  const appItems = videoItems.map((item, index) => {
    item.snippet.channelThumb = channelItemsMap[index].snippet.thumbnails;
    return item;
  });

  return (
    <Grid container>
      {appItems.map((item) => (
        <Card property={item} />
      ))}
    </Grid>
  );
};

export default VideoCards;
