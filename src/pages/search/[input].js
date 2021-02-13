import Layout from '../../components/Layout/index';
import SearchCards from '../../components/SearchCards';

export default function Home({ search, channel, statistics }) {
  return (
    <>
      <Layout>
        <SearchCards
          searchedVideos={search}
          searchedChannel={channel}
          searchedStatistics={statistics}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const path = context.params.input;

  const searchVideos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=${path}&maxResults=20&type=video&key=${apiKey}`,
  );
  const search = await searchVideos.json();

  const snippetArray = await search.items.map(({ snippet }) => snippet);

  const channelIdArray = await snippetArray.map(({ channelId }) => channelId);
  const channelIdString = await channelIdArray.toString();
  const channelId = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIdString}&key=${apiKey}`,
  );
  const channel = await channelId.json();

  const idArray = await search.items.map(({ id }) => id);
  const videoIdArray = await idArray.map(({ videoId }) => videoId);
  const videoIdString = await videoIdArray.toString();
  const videoStatistics = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&regionCode=br&id=${videoIdString}&key=${apiKey}`,
  );
  const statistics = await videoStatistics.json();

  return {
    props: { search, channel, statistics },
  };
}
