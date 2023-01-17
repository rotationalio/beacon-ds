import { type VariantProps } from 'class-variance-authority';
import { ReactNode, useRef } from 'react';
import { type AriaButtonProps, useButton } from 'react-aria';
import { button } from './Button.style';
import { Color, Size } from '@types';

export type ButtonProps = {
  children: ReactNode;
  color?: Color;
  size?: Size;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  tabIndex?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<VariantProps<typeof button>, 'intent' | 'size'> &
  AriaButtonProps<'button'>;

function Button(props: ButtonProps) {
  const ref = useRef(null);
  const { children, color, size, className, leftIcon, rightIcon } = props;
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      className={button({ intent: color, size, className })}
      {...buttonProps}
      ref={ref}
    >
      {leftIcon && <span className="beacon-pr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="beacon-pl-1">{rightIcon}</span>}
    </button>
  );
}

export default Button;
