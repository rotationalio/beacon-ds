import { cx } from 'class-variance-authority';
import { ReactNode, useRef } from 'react';
import { AriaTextFieldOptions, TextFieldAria, useTextField } from 'react-aria';
import { Size } from '../../types';
import { Label } from '../Label';
import { Input } from './Input.style';
import { input } from './TextField.style';
import mergeClassnames from '../../utils/mergeClassnames';

export type TextFieldProps = {
  className?: string;
  size?: Size;
  fullWidth?: boolean;
  rightIcon?: ReactNode;
  errorMessageClassName?: string;
  descriptionClassName?: string;
} & TextFieldAria<'input'> &
  AriaTextFieldOptions<'input'>;

function TextField(props: Partial<TextFieldProps>) {
  const {
    label,
    className,
    size,
    fullWidth,
    rightIcon,
    errorMessageClassName,
    descriptionClassName,
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div
      className={cx('flex flex-col relative', fullWidth ? 'w-full' : 'w-72')}
    >
      <Label
        className="text-sm"
        {...labelProps}
        aria-required={props.isRequired}
      >
        {label}
      </Label>
      <Input
        className={input({ className, size })}
        {...inputProps}
        aria-invalid={!!props.errorMessage}
        ref={ref}
      />

      {rightIcon && <span className="absolute right-3 top-8">{rightIcon}</span>}

      {props.description && (
        <div
          {...descriptionProps}
          className={mergeClassnames(
            'text-sm text-gray-500',
            descriptionClassName
          )}
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
