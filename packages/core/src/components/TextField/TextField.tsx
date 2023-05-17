import mergeClassnames from '../../utils/mergeClassnames';
import { cx } from 'class-variance-authority';
import { ReactNode, useRef } from 'react';
import { AriaTextFieldOptions, useTextField } from 'react-aria';
import { twMerge } from 'tailwind-merge';

import { Label } from '../Label';
import { Input } from './Input.styles';
import { setSizeVariantStyle } from './util';

export type TextFieldProps = {
  className?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  rightIcon?: ReactNode;
  [key: string]: any;
  errorMessageClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & AriaTextFieldOptions<'input'>;

function TextField(props: Partial<TextFieldProps>) {
  const {
    label,
    className,
    size,
    fullWidth,
    rightIcon,
    errorMessageClassName,
    labelClassName,
    descriptionClassName,
    onChange,
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div
      className={cx('relative flex flex-col', fullWidth ? 'w-full' : 'w-72')}
    >
      <Label
        className={twMerge('text-sm', labelClassName)}
        {...labelProps}
        aria-required={props.isRequired}
      >
        {label}
      </Label>
      <Input
        className={
          mergeClassnames(
            setSizeVariantStyle(size),
            (props.isDisabled || props.disabled) &&
              'bg-neutral-100 text-neutral-600 border-neutral-200 cursor-not-allowed',
            className
          ) as string
        }
        {...inputProps}
        onChange={onChange}
        aria-invalid={!!props.errorMessage}
        disabled={props.isDisabled || props.disabled}
        ref={ref}
      />

      {rightIcon && <span className="absolute right-3 top-8">{rightIcon}</span>}

      {props.description && (
        <div
          {...descriptionProps}
          className={twMerge('text-neutral-600 text-sm', descriptionClassName)}
        >
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div
          {...errorMessageProps}
          className={mergeClassnames(
            'py-2 text-error-900 text-xs text-danger-700 ',
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
