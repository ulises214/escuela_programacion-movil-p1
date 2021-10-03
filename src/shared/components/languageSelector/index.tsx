import { FC } from 'react';
import { SpriteSvgIcon } from '../spriteSvgIcon';
import { LanguageItemStyle, ModifiedButton } from './style';

export const LanguageItem: FC<{
  active?: boolean;
  title: string;
}> = ({ active = false, children, title }) => {
  return (
    <LanguageItemStyle active={active}>
      <a href='#' className='dropdown-item py-3'>
        {children} {title}
      </a>
    </LanguageItemStyle>
  );
};
const commonCounties = [
  { name: 'ES (España)', y: -577 },
  { name: 'EN (English)', y: -525 },
  { name: 'MX (México)', y: -629 },
  { name: 'CO (Colombia)', y: -473 },
  { name: 'AR (Argentina)', y: -369 },
];
const countriesNames = [
  'ES (España)',
  'EN (English)',
  'MX (México)',
  'CO (Colombia)',
  'AR (Argentina)',
  'US (USA)',
];
export const LanguageSelector = () => {
  return (
    <ModifiedButton className='dropdown' variant='outlined'>
      <span
        className='dropdown-toggle d-flex align-items-center'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <SpriteSvgIcon alto={24} ancho={24} offsetX={-1} offsetY={-577} />
        <span className='px-1'>ES</span>
      </span>
      <ul
        className='dropdown-menu position-absolute'
        aria-labelledby='navbarDropdown'
      >
        {commonCounties.map((e, i) => (
          <LanguageItem active={i == 0} title={e.name} key={e.name}>
            <SpriteSvgIcon
              size={24}
              offsetX={-1}
              offsetY={e.y}
              style={{ margin: '-3px 3px 0 0' }}
            />
          </LanguageItem>
        ))}
        <LanguageItem title='US (USA)'>
          <SpriteSvgIcon
            style={{ margin: '-3px 3px 0 0' }}
            ancho={24}
            alto={14}
            offsetX={-1}
            offsetY={-681}
          />
        </LanguageItem>
        <li>
          <div className='m-3'>
            <strong>Escoge tu edición de Marca.com favorita</strong>
          </div>
        </li>
        <li>
          <div className='m-3'>
            <SpriteSvgIcon offsetY={-839} size={16} /> Siempre que entres
            en Marca.com se cargará esta edición
          </div>
        </li>
        <li>
          <div className='m-3 row'>
            {countriesNames.map((c, i) => (
              <div className='form-check col-6' key={c}>
                <input
                  type='radio'
                  className='form-check-input'
                  key={c}
                  value={c}
                  name='country selection'
                  id={`country selection ${c}`}
                />
                <label
                  className='form-check-label'
                  htmlFor={`country selection ${c}`}
                >
                  {c}
                </label>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </ModifiedButton>
  );
};
