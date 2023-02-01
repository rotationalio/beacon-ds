import mergeClassnames from '@rotational/beacon-core/lib/utils';
import { cx } from 'class-variance-authority';
import { ReactNode, useRef } from 'react';
import { AriaTextFieldOptions, useTextField } from 'react-aria';
import { twMerge } from 'tailwind-merge';

import { Label } from '../Label';
import { Input } from './Input.style';
import { input } from './TextField.style';

export type TextFieldProps = {
  className?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  rightIcon?: ReactNode;
  errorMessageClassName?: string;
  descriptionClassName?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & Omit<AriaTextFieldOptions<'input'>, 'onChange'>;

function TextField(props: Partial<TextFieldProps>) {
  const {
    label,
    className,
    size,
    fullWidth,
    rightIcon,
    errorMessageClassName,
    descriptionClassName,
    onChange,
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    { ...props, onChange: props.onChange as any },
    ref
  );

  return (
    <div className={cx('relative flex flex-col', fullWidth ? 'w-full' : 'w-72')}>
      <Label className="text-sm" {...labelProps} aria-required={props.isRequired}>
        {label}
      </Label>
      <Input
        className={input({ className, size })}
        {...inputProps}
        onChange={onChange}
        aria-invalid={!!props.errorMessage}
        ref={ref}
      />

      {rightIcon && <span className="absolute right-3 top-8">{rightIcon}</span>}

      {props.description && (
        <div
          {...descriptionProps}
          className={twMerge('text-gray-500 text-sm', descriptionClassName)}
        >
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div
          {...errorMessageProps}
          className={mergeClassnames(
            'text-error-900 text-xs text-danger-500',
            errorMessageClassName
          )}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

export default TextField;
