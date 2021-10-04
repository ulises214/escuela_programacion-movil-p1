import { FC } from 'react';
import styled from 'styled-components';
import basket from '../../../img/basketball.svg';
import futbol from '../../../img/football.svg';
import futbol2 from '../../../img/teams/1564.png';
import futbol1 from '../../../img/teams/2893.png';
import basket1 from '../../../img/teams/6268.png';
import basket2 from '../../../img/teams/7924.png';
import { ComponentsColors } from '../../tokens/componentsColors';

const bg = ComponentsColors.teamListBG;
const Styles = styled.div`
  background-color: ${bg};
`;
export const ResultsTab: FC<{ className: string }> = ({ className }) => {
  return (
    <Styles className={`container my-3 ${className}`}>
      <div className='row justify-content-center align-items-center p-2'>
        <div className='col-12 col-lg-2 d-flex justify-content-center align-items-center '>
          Resultados: Todos
        </div>
        <div className='col-12 col-lg-8 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
          <ResultCard
            hour='14:00'
            location='GoIt'
            title='LALIGA SMARTBANK'
            items={[
              {
                icon: futbol1,
                name: 'Girona',
              },
              {
                icon: futbol2,
                name: 'Almería',
              },
            ]}
            icon={futbol}
          />
          <ResultCard
            hour='13:30'
            title='CHAMPIONS LEAGUE'
            items={[
              {
                icon: basket1,
                name: 'San pablo burgos',
              },
              {
                icon: basket2,
                name: 'Besiktas JK',
              },
            ]}
            icon={basket}
          />
        </div>
        <div className='col-12 col-lg-2 d-flex justify-content-center align-items-center'>
          <a href='#'>Ver todo</a>
        </div>
      </div>
    </Styles>
  );
};
const ResultCard: FC<{
  icon: string;
  title: string;
  hour: string;
  location?: string;
  items: Array<{
    icon: string;
    name: string;
  }>;
}> = ({ icon, title, hour, location, items }) => {
  return (
    <div className='d-flex flex-column m-2'>
      <div className='p-2'>
        <img alt='' src={icon} width='24' /> {title}
      </div>
      <div className='border border-dark p-1'>
        <div>
          <small>
            <strong>{hour}</strong>
          </small>
          {location && (
            <small>
              <span className='px-4'>{location}</span>
            </small>
          )}
        </div>
        {items.map((i, ii) => (
          <div
            className='d-flex justify-content-between my-2'
            key={`${i} - ${ii}`}
          >
            <div>
              <img alt='' src={i.icon} width='16' />
              {i.name}
            </div>
            <div className='border border-dark px-3 mx-2'> - </div>
          </div>
        ))}
      </div>
    </div>
  );
};
