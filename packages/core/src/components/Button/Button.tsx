import React, { ReactNode, forwardRef } from 'react';
import StyledButton from './Button.styles';
import { BtnSize, BtnVariant } from './Button.types';
import mergeClassnames from '../../utils/mergeClassnames';
import Loader from '../Loader/Loader';
import { setFontSize, setBtnVariant, setDisabledCss } from './utils';
export type BtnProps = {
  children: ReactNode;
  variant?: BtnVariant;
  size?: BtnSize;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: Boolean;
  disabled?: Boolean;
  tabIndex?: number;
  onclick?: () => void;
  onChange?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef((props: BtnProps, ref: any) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    className,
    leftIcon,
    rightIcon,
    isLoading,
    disabled,
    ...rest
  } = props;

  return (
    <StyledButton
      className={mergeClassnames(
        'transition duration-300 ease-out',
        setFontSize(size),
        'min-w-[100px] rounded-sm item-center font-bold text-white px-2',
        setBtnVariant(variant),
        disabled && setDisabledCss(),
        className
      )}
      ref={ref}
      {...rest}
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
