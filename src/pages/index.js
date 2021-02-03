import Layout from '../components/Layout/index';
import VideoCards from '../components/VideoCards';

export default function Home({ videos }) {
  return (
    <>
      <Layout>
        <VideoCards popularVideos={videos} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const popularVideos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=br&videoCategoryId=17&key=${apiKey}`,
  );
  const videos = await popularVideos.json();

  return {
    props: { videos },
  };
}
