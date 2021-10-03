import styled from 'styled-components';
import { ComponentsColors } from '../../tokens/componentsColors';
import { ComponentsFontSizes } from '../../tokens/componentsFontSizes';
export const HeaderStylesTop = styled.ul`
  font-size: ${ComponentsFontSizes.caption};
  display: flex;
  overflow-x: hidden;
  list-style-type: none;
  padding: 0.2rem;
  margin: 0;

  li {
    flex: 0 0 auto;
    padding-right: 6px;
    position: relative;
  }

  .bold {
    font-weight: 700;
  }
`;

export const HeaderStylesTopItem = styled.li`
  a {
    font-weight: 400;
    margin: 0 0.5rem;
    color: ${ComponentsColors.textColorOff} !important;
    text-decoration: none !important;
    cursor: pointer;

    &:hover {
      color: ${ComponentsColors.textColorOff};
      border-bottom: 0.1rem ${ComponentsColors.textColor} solid;
    }
  }

  ::after {
    content: '/';
    display: inline-block;
    padding-left: 6px;
    color: ${ComponentsColors.textColorOff};
  }
`;
export const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
`;
