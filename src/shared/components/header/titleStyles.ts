import styled from 'styled-components';
import { ComponentsColors } from '../../tokens/componentsColors';

export const HeaderStylesTitleLeftItem = styled.a`
  text-decoration: none;
  color: ${ComponentsColors.textColor};
  font-size: 0.75rem;

  strong {
    margin-left: 0.2rem;
    max-width: 4rem;
  }

  :hover {
    color: ${ComponentsColors.primaryColor};
  }
`;
