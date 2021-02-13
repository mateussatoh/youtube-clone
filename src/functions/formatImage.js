const formatImage = (thumbnails) => {
  let format;
  if (thumbnails.maxres) {
    format = thumbnails.maxres.url;
  } else if (thumbnails.standard) {
    format = thumbnails.standard.url;
  } else if (thumbnails.high) {
    format = thumbnails.high.url;
  } else {
    format = thumbnails.medium.url;
  }
  return format;
};

export default formatImage;
