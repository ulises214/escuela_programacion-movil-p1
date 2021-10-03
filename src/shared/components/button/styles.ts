import styled from 'styled-components';
import { ButtonProps } from '.';
import { ComponentsColors } from '../../tokens/componentsColors';
const get_background_color = (variant: string) =>
  variant == 'filled'
    ? ComponentsColors.primaryColor
    : ComponentsColors.textColorOnPrimary;
const get_text_color = (variant: string) =>
  variant == 'filled'
    ? ComponentsColors.textColorOnPrimary
    : ComponentsColors.primaryColor;
const get_border_color = (variant: string) =>
  variant == 'filled'
    ? ComponentsColors.primaryColorDark
    : ComponentsColors.textColorOff;
const hover_bg = ComponentsColors.hoverButtonBG;
const hover_color = ComponentsColors.textColorOnPrimary;
export const ButtonStyles = styled.button<ButtonProps>`
  outline: none;
  border: 0.1rem ${(p) => get_border_color(p.variant)} solid;
  background-color: ${(p) => get_background_color(p.variant)};
  color: ${(p) => get_text_color(p.variant)};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s, color 0.25s, border 0.25s;

  :hover {
    color: ${hover_color};
    border: 0.1rem ${hover_bg} solid;
    background-color: ${hover_bg};
  }
`;
