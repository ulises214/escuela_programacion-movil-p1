import { FC } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SpriteSvgIcon } from '../spriteSvgIcon';
import {
  baloncestoContent,
  cochesContent,
  futbolContent,
  motorContent,
  poliContent,
} from './navigationData';
import {
  DropdownItemStyles,
  HeaderNavigationBrandStyles,
  HeaderNavigationStyles,
} from './navigationStyles';
import { RightElements } from './rightElements';
export interface DropdownItemContent {
  title: string;
  sections: Array<{
    name: string;
    links: string[];
  }>;
}
interface DropdownItemProps {
  content: DropdownItemContent[];
  className?: string;
}
const DropdownItem: FC<DropdownItemProps> = ({
  className,
  content,
  children,
}) => {
  return (
    <DropdownItemStyles className={`nav-item dropdown ${className}`}>
      <span
        className='nav-link dropdown-toggle py-3'
        id='navbarDropdown'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {children}
      </span>
      <div
        className={`dropdown-menu position-fixed p-4`}
        aria-labelledby='navbarDropdown'
      >
        <div className='row'>
          {content.map((c, i) => (
            <div key={`${c.title} - ${i}`} className='col-6 col-lg-3'>
              <h4>{c.title}</h4>
              {c.sections.map((s, i) => (
                <div className='section p-2' key={`${s} - ${i}`}>
                  <h5>
                    <a href='#'>{s.name}</a>
                  </h5>
                  <div className='section-links d-flex flex-row flex-wrap'>
                    {s.links.map((l, i) => (
                      <a
                        className='mx-1'
                        href='#'
                        key={`${s} - ${l} - ${i}`}
                      >
                        {l}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </DropdownItemStyles>
  );
};
const NavBrand: FC<{ className: string }> = ({ className }) => {
  const isMd = useMediaQuery('md');
  const isLg = useMediaQuery('xl');

  return (
    <HeaderNavigationBrandStyles
      className={`navbar-brand pr-4 py-2 ${className}`}
    >
      <ul className='d-flex flex-row align-items-center'>
        <li className='px-3'>
          <SpriteSvgIcon offsetY={-731} size={34} />
        </li>
        <li className='px-3'>
          <a href='#'>Última hora</a>
        </li>
        {isMd && (
          <li className='px-3'>
            <a href='#'>Programación TV</a>
          </li>
        )}
        {isLg && (
          <li className='px-3'>
            <a href='#'>FANTASY</a>
          </li>
        )}
      </ul>
    </HeaderNavigationBrandStyles>
  );
};

export const HeaderNavigation: FC = () => {
  return (
    <HeaderNavigationStyles className='navbar navbar-expand-xl navbar-dark bg-dark'>
      <div className='container'>
        <NavBrand className='d-xl-none d-block' />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse py-2 p-xl-0'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-xl-0'>
            <DropdownItem content={futbolContent}>Fútbol</DropdownItem>
            <DropdownItem content={baloncestoContent}>
              Baloncesto
            </DropdownItem>
            <DropdownItem content={motorContent}>Motor</DropdownItem>
            <DropdownItem content={poliContent}>
              Polideportivo
            </DropdownItem>
            <DropdownItem
              className='d-none d-xxl-block'
              content={cochesContent}
            >
              Coches
            </DropdownItem>
            <li className='nav-item d-block d-lg-none'>
              <RightElements position='start' />
            </li>
          </ul>
          <NavBrand className='d-none d-xl-block' />
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Buscar en marca.com'
              aria-label='Search'
            />
          </form>
        </div>
      </div>
    </HeaderNavigationStyles>
  );
};
