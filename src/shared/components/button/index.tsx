import { FC } from 'react';
import { ButtonStyles } from './styles';
export interface ButtonProps {
  variant: 'filled' | 'outlined';
  className?: string;
}
export const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
}) => {
  return (
    <ButtonStyles className={`py-1 px-2 ${className}`} variant={variant}>
      {children}
    </ButtonStyles>
  );
};
