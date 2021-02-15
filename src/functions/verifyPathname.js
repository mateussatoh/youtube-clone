const verifyPathname = (pathname, input) => {
  let adress;
  if (
    pathname === '/' ||
    pathname === '/feed/trending' ||
    pathname === '/feed/subscriptions' ||
    pathname === '/feed/library' ||
    pathname === '/feed/history'
  ) {
    return `../search/${input}`;
  } else {
    return `${input}`;
  }
};

export default verifyPathname;
