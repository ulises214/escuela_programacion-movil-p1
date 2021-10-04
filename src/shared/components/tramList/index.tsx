import React from 'react';
import TeamsSprite from '../../../img/teams-primera-sc8f2c27534.png';
import { SpriteSvgIcon } from '../spriteSvgIcon';
import { TeamListStyles } from './styles';
export const TeamList = () => {
  return (
    <TeamListStyles className='d-none d-xl-block'>
      <div className='container d-flex flex-row justify-content-evenly'>
        {Array(20)
          .fill(1)
          .map((_, i) => (
            <SpriteSvgIcon
              key={`${_} - ${i}`}
              ancho={39}
              alto={40}
              offsetX={0}
              offsetY={i * -40}
              src={TeamsSprite}
            />
          ))}
      </div>
    </TeamListStyles>
  );
};
