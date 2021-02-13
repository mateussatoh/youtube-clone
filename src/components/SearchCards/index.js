import { Grid } from '@material-ui/core';
import Card from './Card';

const VideoCards = ({
  searchedVideos,
  searchedChannel,
  searchedStatistics,
}) => {
  const searchItems = searchedVideos.items;

  const channelItems = searchedChannel.items;
  const channelItemsMap = channelItems.map((item) => item);
  const channelIdResponse = channelItems.map((item) => item.id);

  const statisticsItems = searchedStatistics.items;
  const statisticsItemsMap = statisticsItems.map((item) => item);
  const statisticsIdResponse = statisticsItems.map((item) => item.id);

  const appItems = searchItems.map((item) => {
    const channelPosition = channelIdResponse.indexOf(item.snippet.channelId);
    const statisticsPosition = statisticsIdResponse.indexOf(item.id.videoId);

    item.snippet.statistics = statisticsItemsMap[statisticsPosition].statistics;
    item.snippet.channelThumb =
      channelItemsMap[channelPosition].snippet.thumbnails;
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
