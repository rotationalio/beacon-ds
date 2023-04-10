import React, { ReactNode, forwardRef } from 'react';
import { StyledButton } from './Button.styles';
import { BtnSize, BtnVariant } from './Button.types';
import Loader from '../Loader/Loader';

export type BtnProps = {
  children: ReactNode;
  variant?: BtnVariant;
  size?: BtnSize;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: Boolean;
  tabIndex?: number;
  onclick?: () => void;
  onChange?: () => void;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = forwardRef<HTMLButtonElement, BtnProps>((props, ref) => {
  const {
    children,
    leftIcon,
    rightIcon,
    isLoading,
    variant = 'primary',
    size = 'medium',
    ...rest
  } = props;

  return (
    <StyledButton
      size={size}
      variant={variant}
      isLoading={isLoading}
      {...rest}
      ref={ref}
    >
      {isLoading ? (
        <Loader size="xs" className="text-center item-center m-auto" />
      ) : (
        <>
          {leftIcon && <span className="pr-1">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="pl-1">{rightIcon}</span>}
        </>
      )}
    </StyledButton>
  );
});

export default Button;
