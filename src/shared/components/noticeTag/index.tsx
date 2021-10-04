import { FC } from 'react';
import styled from 'styled-components';
import { AppColors } from '../../tokens/colors';
export type TagVariantColor =
  | 'blue'
  | 'gold'
  | 'green'
  | 'red'
  | 'purple'
  | 'black';
interface TagProps {
  color: TagVariantColor;
}
const get_color_by_variant = (variant: TagVariantColor): string => {
  switch (variant) {
    case 'blue':
      return AppColors.blue;
    case 'gold':
      return AppColors.orange;
    case 'green':
      return AppColors.green;
    case 'red':
      return AppColors.redDark;
    case 'purple':
      return AppColors.purple;
    case 'black':
      return AppColors.blueBlack;
  }
};
export const NoticeTag: FC<TagProps> = ({ children, color }) => {
  return (
    <NoticeTagStyle className='p-1' color={color}>
      {children}
    </NoticeTagStyle>
  );
};
const NoticeTagStyle = styled.span<TagProps>`
  position: absolute;
  top: -0.2rem;
  left: -0.2rem;
  color: ${AppColors.white};
  font-size: 0.8rem;
  background-color: ${(p) => get_color_by_variant(p.color)};
`;
