function parseRate(rating) {
  const fill = Math.floor(rating / 2);
  const half = rating / 2 - Math.floor(rating / 2) > 1 ? 1 : 0;
  const empty = 5 - fill - half;

  return {
    fill,
    half,
    empty,
  };
}

export { parseRate };
