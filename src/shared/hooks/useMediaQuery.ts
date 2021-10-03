import { useEffect, useState } from 'react';
const queryBuilder = (min: number, max: number): string =>
  `${minQueryBuilder(min)} AND ${maxQueryBuilder(max)}`;
const maxQueryBuilder = (num: number) => `(max-width:${num}px)`;
const minQueryBuilder = (num: number) => `(min-width:${num}px)`;
type breakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const useMediaQuery: (bp: breakPoint) => boolean = (bp) => {
  switch (bp) {
    case 'xs':
      return _useMediaQuery(maxQueryBuilder(576));
    case 'sm':
      return _useMediaQuery(minQueryBuilder(576));
    case 'md':
      return _useMediaQuery(minQueryBuilder(768));
    case 'lg':
      return _useMediaQuery(minQueryBuilder(992));
    case 'xl':
      return _useMediaQuery(minQueryBuilder(1200));
    case 'xxl':
      return _useMediaQuery(minQueryBuilder(1400));
  }
  // return {
  //   isMaxTablet: _useMediaQuery(maxQueryBuilder(768)),
  //   isMinDesktop: _useMediaQuery(minQueryBuilder(768)),
  //   isMobile: _useMediaQuery(maxQueryBuilder(480)),
  //   isTablet: _useMediaQuery(queryBuilder(481, 768)),
  //   isLaptop: _useMediaQuery(queryBuilder(768, 1024)),
  //   isDesktop: _useMediaQuery(queryBuilder(1024, 1200)),
  //   isExtraLarge: _useMediaQuery(queryBuilder(1201, 5000)),
  // };
};
const _useMediaQuery = (query: string) => {
  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = useState(!!mediaQuery.matches);

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return match;
};
