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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef((props: BtnProps, ref: any) => {
  const {
    children,
    variant,
    size,
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
        'min-w-[100px] rounded-sm text-center item-center font-bold text-white-900 px-2',
        setBtnVariant(variant || 'primary'),
        disabled && setDisabledCss(),
        setFontSize(size || 'medium'),
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
