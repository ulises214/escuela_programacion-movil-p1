import styled from 'styled-components';
import { ComponentsColors } from '../../tokens/componentsColors';
const bg = ComponentsColors.teamListBG;
const marca_text = ComponentsColors.primaryColor;
export const MarcaStoriesStyles = styled.div`
  background-color: ${bg};
  border-radius: 10px;

  .marca {
    color: ${marca_text};
  }
`;
