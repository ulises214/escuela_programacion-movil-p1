import { FC } from 'react';
import { Button } from '../button';
import { LanguageSelector } from '../languageSelector';

export const RightElements: FC<{
  className?: string;
  position: 'start' | 'end' | 'center';
}> = ({ className, position }) => {
  return (
    <div className={className}>
      <div className={`d-flex flex-row justify-content-${position}`}>
        <LanguageSelector />
        <Button variant='filled' className='mx-2'>
          Suscríbete
        </Button>
        <Button variant='outlined'>Iniciar sesión</Button>
      </div>
    </div>
  );
};
