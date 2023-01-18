import { cx } from 'class-variance-authority';
import { ReactNode, useRef } from 'react';
import { AriaTextFieldOptions, TextFieldAria, useTextField } from 'react-aria';
import { Size } from 'types';
import { Label } from './Label.style';
import { Input } from './Input.style';
import { input } from './TextField.style';

export type TextFieldProps = {
  className?: string;
  size?: Size;
  fullWidth?: boolean;
  rightIcon?: ReactNode;
} & TextFieldAria<'input'> &
  AriaTextFieldOptions<'input'>;

function TextField(props: Partial<TextFieldProps>) {
  const { label, className, size, fullWidth, rightIcon } = props;
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div
      className={cx(
        'beacon-flex beacon-flex-col beacon-relative',
        fullWidth ? 'beacon-w-full' : 'beacon-w-72'
      )}
    >
      <Label
        className="beacon-text-sm"
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

      {rightIcon && (
        <span className="beacon-absolute beacon-right-3 beacon-top-8">
          {rightIcon}
        </span>
      )}

      {props.description && (
        <div {...descriptionProps} className="beacon-text-xs">
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div
          {...errorMessageProps}
          className="beacon-text-error-900 beacon-text-xs beacon-text-danger-500"
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

export default TextField;
