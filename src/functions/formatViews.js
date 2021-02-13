const formatViews = (statistics) => {
  const charViews = statistics.viewCount;
  const { length } = charViews;
  let format;
  if (length === 10) {
    format = `${charViews.charAt(0)},${charViews.charAt(
      1,
    )} bi de visualizações`;
  } else if (length === 9) {
    format = `${charViews.charAt(0)}${charViews.charAt(1)}${charViews.charAt(
      2,
    )} mi de visualizações`;
  } else if (length === 8) {
    format = `${charViews.charAt(0)}${charViews.charAt(1)} mi de visualizações`;
  } else if (length === 7 && charViews.charAt(1) !== '0') {
    format = `${charViews.charAt(0)},${charViews.charAt(
      1,
    )} mi de visualizações`;
  } else if (length === 7 && charViews.charAt(1) === '0') {
    format = `${charViews.charAt(0)} mi de visualizações`;
  } else if (length === 6) {
    format = `${charViews.charAt(0)}${charViews.charAt(1)}${charViews.charAt(
      2,
    )} mil visualizações`;
  } else if (length === 5) {
    format = `${charViews.charAt(0)}${charViews.charAt(1)} mil visualizações`;
  } else if (length === 4) {
    format = `${charViews.charAt(0)} mil visualizações`;
  } else if (length === 3) {
    format = `${charViews.charAt(0)}${charViews.charAt(1)}${charViews.charAt(
      2,
    )} visualizações`;
  } else if (length === 2) {
    format = `${charViews.charAt(0)}${charViews.charAt(1)} visualizações`;
  } else if (length === 1) {
    format = `${charViews.charAt(0)} visualizações`;
  }

  return format;
};

export default formatViews;
