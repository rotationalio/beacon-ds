import { type VariantProps } from 'class-variance-authority';
import { ReactNode, forwardRef } from 'react';
import {
  type AriaButtonProps,
  useButton,
  useFocusRing,
  mergeProps,
} from 'react-aria';
import { button } from './AriaButton.styles';
import Loader from '../Loader/Loader';
import mergeClassnames from '../../utils/mergeClassnames';

type BtnVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

type BtnSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children: ReactNode;
  color?: BtnVariant;
  variant?: BtnVariant;
  size?: BtnSize;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: Boolean;
  tabIndex?: number;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<VariantProps<typeof button>, 'intent' | 'size'> &
  AriaButtonProps<'button'>;

const AriaButton = forwardRef((props: ButtonProps, ref: any) => {
  const {
    children,
    color,
    variant,
    size,
    className,
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled,
  } = props;
  const { buttonProps } = useButton(props, ref);
  const { focusProps } = useFocusRing();
  const mergeClassname = mergeClassnames(
    'min-w-[100px] rounded text-center p-auto text-lg font-bold text-white',
    className
  );
  return (
    <button
      className={button({
        intent: color || variant,
        size,
        isDisabled,
        className: mergeClassname,
      })}
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      disabled={!!isDisabled}
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
    </button>
  );
});

export default AriaButton;
