import React, { ReactNode, forwardRef } from 'react';
import StyledBtn from './Btn.styles';
import { BtnSize, BtnVariant } from './Btn.types';
import mergeClassnames from '../../utils/mergeClassnames';
import Spinner from '../Spinner/Spinner';
import { setFontSize, setGhostVariant } from './utils';
export type BtnProps = {
  children: ReactNode;
  variant?: BtnVariant;
  size?: BtnSize;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: Boolean;
  tabIndex?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.HTMLAttributes<HTMLButtonElement>;

const Btn = forwardRef((props: BtnProps, ref: any) => {
  const {
    children,
    variant,
    size,
    className,
    leftIcon,
    rightIcon,
    isLoading,
    ...rest
  } = props;

  return (
    <StyledBtn
      className={mergeClassnames(
        'rounded-sm text-center font-bold text-white-900',
        setFontSize(size || 'medium'),
        variant === 'ghost' && setGhostVariant(),
        className
      )}
      variant={variant}
      size={size}
      ref={ref}
      {...rest}
    >
      {isLoading ? (
        <Spinner size="xs" />
      ) : (
        <>
          {leftIcon && <span className="pr-1">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="pl-1">{rightIcon}</span>}
        </>
      )}
    </StyledBtn>
  );
});

export default Btn;
