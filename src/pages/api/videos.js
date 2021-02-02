async function handler(req, res) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const popularVideos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=br&videoCategoryId=17&key=${apiKey}`,
  );
  const popularVideosJson = await popularVideos.json();
  const a = popularVideosJson.kind;

  res.json(popularVideosJson);
}

export default handler;
