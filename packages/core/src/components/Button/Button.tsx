import React, { ReactNode, forwardRef } from 'react';
import { StyledButton } from './Button.styles';
import { BtnSize, BtnVariant } from './Button.types';
import Loader from '../Loader/Loader';
import { mergeClassnames } from '../../utils';

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
    className,
    variant = 'primary',
    size = 'medium',
    ...rest
  } = props;

  return (
    <StyledButton
      size={size}
      variant={variant}
      isLoading={isLoading}
      className={mergeClassnames(
        'line-height-1.75 cursor-pointer text-white font-size-14 px-4 py-2 min-h-[28px] bg-inherit transition-colors duration-200 ease-in-out rounded-5 focus:outline-none text-[14px] font-bold',
        variant === 'ghost' &&
          'text-black border-gray-500 border-2 h-10 w-20 rounded-5',
        className
      )}
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
