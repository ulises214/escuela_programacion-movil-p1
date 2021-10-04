import { FC } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { TeamList } from '../tramList';
import { HeaderNavigation } from './navigation';
import { HeaderStyles } from './styles';
import { HeaderTitle } from './title';
import { HeaderTop } from './top';

export const Header: FC = () => {
  const isLg = useMediaQuery('lg');

  return (
    <HeaderStyles>
      {isLg && <HeaderTop />}
      <HeaderTitle />
      <HeaderNavigation />
      <TeamList />
    </HeaderStyles>
  );
};
