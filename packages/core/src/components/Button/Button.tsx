import { type VariantProps } from 'class-variance-authority';
import { ReactNode, forwardRef } from 'react';
import {
  type AriaButtonProps,
  useButton,
  useFocusRing,
  mergeProps,
} from 'react-aria';
import { button } from './Button.styles';
import { Color, Size } from '../../types';

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

const Button = forwardRef((props: ButtonProps, ref: any) => {
  const { children, color, size, className, leftIcon, rightIcon } = props;
  const { buttonProps } = useButton(props, ref);
  const { focusProps } = useFocusRing();

  return (
    <button
      className={button({ intent: color, size, className })}
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
    >
      {leftIcon && <span className="beacon-pr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="beacon-pl-1">{rightIcon}</span>}
    </button>
  );
});

export default Button;
