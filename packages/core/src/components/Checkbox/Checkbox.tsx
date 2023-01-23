import { useToggleState, ToggleProps } from 'react-stately';
import {
  useCheckbox,
  AriaCheckboxProps,
  useLabel,
  VisuallyHidden,
  useFocusRing,
} from 'react-aria';
import React from 'react';
<<<<<<< HEAD
import { Input, Label, Span } from './Checkbox.styles';
=======
import styled from 'styled-components';
import cn from 'clsx';
>>>>>>> 9a12f25 (sc-12341 Beacon FE : Checkbox Element Component)

export type CheckboxProps = {
  isValid?: boolean;
  htmlFor?: string;
} & AriaCheckboxProps &
  ToggleProps;

<<<<<<< HEAD
=======
const Label = styled.label((props) => ({
  display: 'flex',
  alignItems: 'center',
}));

const Input = styled.input((props) => ({
  marginRight: 8,
}));

const Span = styled.span((props: { isDisabled?: boolean }) => ({
  ...(props?.isDisabled && {
    color: 'gray',
  }),
}));

>>>>>>> 9a12f25 (sc-12341 Beacon FE : Checkbox Element Component)
function Checkbox(props: CheckboxProps) {
  const { children } = props;
  const { labelProps, fieldProps } = useLabel(props);
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(
    {
      ...props,
      ...fieldProps,
      validationState: props?.isValid ? 'valid' : 'invalid',
    },
    state,
    ref
  );
<<<<<<< HEAD
=======
  console.log('[] inputProps', inputProps);
>>>>>>> 9a12f25 (sc-12341 Beacon FE : Checkbox Element Component)

  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  return (
    <Label {...labelProps}>
      <VisuallyHidden>
        <Input {...inputProps} {...fieldProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect
          x={isSelected ? 4 : 5}
          y={isSelected ? 4 : 5}
          width={isSelected ? 16 : 14}
          height={isSelected ? 16 : 14}
          fill={isSelected ? 'var(--colors-primary-900)' : 'none'}
          fillOpacity={props.isDisabled ? 0.7 : undefined}
          stroke={isSelected ? 'none' : 'gray'}
          strokeWidth={2}
        />
        {isSelected && (
          <path
            fill="#fff"
            transform="translate(7 7)"
            d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
          />
        )}
        {props.isIndeterminate && (
          <rect x={7} y={11} width={10} height={2} fill="gray" />
        )}
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={22}
            height={22}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
      </svg>
      <Span isDisabled={props.isDisabled}>{children}</Span>
    </Label>
  );
}

export default Checkbox;
