import Layout from '../components/Layout/index';
import VideoCards from '../components/VideoCards';

export default function Home({ videos, channel }) {
  return (
    <>
      <Layout>
        <VideoCards popularVideos={videos} popularChannels={channel} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const popularVideos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&regionCode=br&videoCategoryId=1&key=${apiKey}`,
  );
  const videos = await popularVideos.json();

  const snippetArray = await videos.items.map(({ snippet }) => snippet);

  const channelIdArray = await snippetArray.map(({ channelId }) => channelId);
  const channelIdString = await channelIdArray.toString();

  const channelId = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIdString}&key=${apiKey}`,
  );
  const channel = await channelId.json();

  return {
    props: { videos, channel },
  };
}
