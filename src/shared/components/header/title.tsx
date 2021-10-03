import { FC, ReactNode } from 'react';
import Image1 from '../../../img/1633128687_extras_primera_papel_1.jpg';
import Image2 from '../../../img/cuidateplus.svg';
import { SpriteSvgIcon } from '../spriteSvgIcon/';
import { RightElements } from './rightElements';
import { HeaderStylesTitleLeftItem } from './titleStyles';
const HeaderTitleLeftItem: FC<{
  title: String;
  children: ReactNode;
}> = ({ children, title }) => {
  return (
    <HeaderStylesTitleLeftItem className='d-flex flex-row align-items-center'>
      {children}
      <strong className='d-none d-md-block'>{title}</strong>
    </HeaderStylesTitleLeftItem>
  );
};
export const HeaderTitle: FC = () => {
  return (
    <div className='container'>
      <div className='row align-items-center py-2'>
        <div className='col-6 col-lg-4 d-flex flex-row justify-content-evenly '>
          <HeaderTitleLeftItem title='La portada de hoy'>
            <img
              className='responsive-icon'
              src={Image1}
              alt='La portada de hoy'
              width='32px'
              height='44px'
            />
          </HeaderTitleLeftItem>
          <HeaderTitleLeftItem title='Radio Marca'>
            <SpriteSvgIcon
              offsetX={-1}
              offsetY={-1637}
              ancho={46}
              alto={41}
            />
          </HeaderTitleLeftItem>
          <HeaderTitleLeftItem title='Cuídate Plus'>
            <img
              src={Image2}
              alt='CuídatePlus'
              width='40px'
              className='responsive-icon'
            />
          </HeaderTitleLeftItem>
        </div>
        <div className='col-6 col-lg-4'>
          <div className='d-flex flex-row justify-content-end justify-content-lg-center'>
            <SpriteSvgIcon
              offsetX={-1}
              offsetY={-975}
              ancho={137.206}
              alto={38}
            />
          </div>
        </div>
        <RightElements
          className='d-none d-lg-block col-lg-4'
          position='center'
        />
      </div>
    </div>
  );
};
