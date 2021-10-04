import { FC } from 'react';
import styled from 'styled-components';
import SpriteImage from '../../../img/sprites.svg';
interface SpriteSvgIconProps {
  offsetX?: number;
  offsetY: number;
  color?: string;
  ancho?: number;
  alto?: number;
  size?: number;
  style?: React.CSSProperties;
  src?: string;
}
export const SpriteSvgIcon: FC<SpriteSvgIconProps> = ({
  size,
  ancho,
  alto,
  style,
  offsetX = -1,
  offsetY,
  color,
  src,
}) => {
  if (!size && !(alto && ancho))
    throw new Error('Must provide a size or height and width');
  return (
    <SpriteSvgIconStyle
      style={style}
      className='responsive-icon'
      offsetX={offsetX}
      offsetY={offsetY}
      ancho={ancho ?? size}
      alto={alto ?? size}
      color={color}
      src={src ?? SpriteImage}
    />
  );
};
const SpriteSvgIconStyle = styled.i<SpriteSvgIconProps>`
  font-size: 1px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  background-position: ${(p) => p['offsetX']}px ${(p) => p['offsetY']}px;
  width: ${(p) => p.ancho}px;
  height: ${(p) => p.alto}px;
`;
