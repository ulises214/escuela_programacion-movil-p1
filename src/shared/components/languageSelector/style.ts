import styled from 'styled-components';
import { AppColors } from '../../tokens/colors';
import { ComponentsColors } from '../../tokens/componentsColors';
import { Button } from '../button';
const get_bg_color = (active: boolean) =>
  active ? ComponentsColors.linkColor : ComponentsColors.bodyColor;
const get_color = (active: boolean) =>
  active
    ? ComponentsColors.textColorOnPrimary
    : ComponentsColors.textColorSecondary;
const get_hover_bg = (active: boolean) =>
  active ? ComponentsColors.linkColor : AppColors.grayLight;
export const LanguageItemStyle = styled.li<{
  active: boolean;
}>`
  background-color: ${(p) => get_bg_color(p.active)};
  font-weight: 400;
  transition: background-color 0.25s, color 0.25s;
  border-bottom: 0.1rem solid ${(p) => get_hover_bg(p.active)};

  a {
    background-color: transparent;
    color: ${(p) => get_color(p.active)} !important;

    :hover {
      color: ${(p) => get_color(p.active)} !important;
      background-color: transparent;
    }
  }

  &:hover {
    background-color: ${(p) => get_hover_bg(p.active)};
  }
`;
export const ModifiedButton = styled(Button)`
  .dropdown-menu {
    min-width: 20rem !important;
  }
`;
