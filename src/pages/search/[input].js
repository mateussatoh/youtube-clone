import Layout from '../../components/Layout/index';
import SearchCards from '../../components/SearchCards';

export default function Home({ search }) {
  return (
    <>
      <Layout>
        <SearchCards searchedVideos={search} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const path = context.params.input;

  const searchVideos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&q=${path}&maxResults=50&key=${apiKey}`,
  );
  const search = await searchVideos.json();

  return {
    props: { search },
  };
}
