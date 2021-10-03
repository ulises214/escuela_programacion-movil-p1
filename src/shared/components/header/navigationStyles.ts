import styled from 'styled-components';
import { ComponentsColors } from '../../tokens/componentsColors';
const bg_color = ComponentsColors.primaryColor;
const bg_color_drop = ComponentsColors.hoverButtonBG;

const bg_color_dark = ComponentsColors.primaryColorDark;
const dropdown_bg = ComponentsColors.navMenuDropDownColor;
const text_color = ComponentsColors.textColorOnPrimary;
const text_color_off = ComponentsColors.textColorOff;

export const HeaderNavigationStyles = styled.nav`
  background-color: ${bg_color} !important;
  padding-top: 0;
  padding-bottom: 0;

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  .dropdown-toggle {
    :hover {
      background-color: ${bg_color_drop};
    }
  }
`;
export const HeaderNavigationBrandStyles = styled.li`
  background-color: ${bg_color_dark} !important;
  font-size: 1rem;

  * {
    color: ${text_color} !important;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
export const DropdownItemStyles = styled.li`
  .nav-link {
    color: ${text_color} !important;
  }

  a {
    color: ${text_color};

    :hover {
      color: ${bg_color};
      text-decoration: none;
    }
  }

  .dropdown-menu {
    background-color: ${dropdown_bg};
    color: ${text_color};
    top: 50%;
    left: 50%;

    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    width: 80vw;
    max-width: 300rem;
    max-height: 90vh;
    overflow-y: scroll;

    h4 {
      color: ${text_color_off};
    }

    .section-links {
      font-size: 0.9rem;

      a {
        font-weight: 300;
      }
    }
  }
`;
