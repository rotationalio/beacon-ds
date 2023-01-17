import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className={[
          'beacon-bg-primary-300 hover:beacon-bg-primary-700',
          'active:beacon-bg-primary-800 beacon-text-neutral-white',
          'beacon-py-8 beacon-px-[20px]',
          'beacon-rounded-large',
        ].join(' ')}
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  }
);

Button.displayName = 'ButtonTailwind';

export default Button;
