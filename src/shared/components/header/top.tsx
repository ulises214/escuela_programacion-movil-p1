import { FC } from 'react';
import { ComponentsColors } from '../../tokens/componentsColors';
import { HeaderStylesTop, HeaderStylesTopItem } from './styles';

const topItems = [
  'Libres F1',
  'Volcán La Palma',
  'Ryder Cup 2021',
  'Horarios F1 Rusia',
  'Chelsea vs Manchester City',
  'Barcelona - Real Madrid',
  'Puigdemont',
  'Secret Story',
  'Azufre La Palma',
  'Calendario Liga',
  'Clasificacion La Liga',
  'Calendario F1',
  'Calendario',
];
export const HeaderTop: FC = () => {
  return (
    <div
      style={{
        backgroundColor: `${ComponentsColors.headerColorTop}`,
      }}
    >
      <div className='container'>
        <HeaderStylesTop>
          <li>
            <span className='bold'>En noticia:</span>
          </li>
          {topItems.map((e) => (
            <HeaderStylesTopItem key={e}>
              <a>{e}</a>
            </HeaderStylesTopItem>
          ))}
        </HeaderStylesTop>
      </div>
    </div>
  );
};
