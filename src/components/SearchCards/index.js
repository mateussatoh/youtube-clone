import { Grid } from '@material-ui/core';
import Card from './Card';

const VideoCards = ({ searchedVideos, searchedChannel }) => {
  const searchItems = searchedVideos.items;

  const channelItems = searchedChannel.items;
  const channelItemsMap = channelItems.map((item) => item);
  const channelPosition = channelItems.map((item) => item.id);

  const appItems = searchItems.map((item, index) => {
    const position = channelPosition.indexOf(item.snippet.channelId);
    // channelPosition = array estático dos channelsIds da página inicial
    // position = index da resposta dos CANAIS no array dos VIDEOS

    item.snippet.channelThumb = channelItemsMap[position].snippet.thumbnails;
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
