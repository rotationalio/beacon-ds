import styled from 'styled-components';
import { SelectProps, SelectOptionType } from './Select.types';

export type Optional = Partial<
  SelectProps<SelectOptionType[], SelectOptionType>
>;

const Select = styled.select<Optional>((props) => ({
  backgroundColor: 'var(--colors-white)',
  borderRadius: 'var(--radius-md)',
  borderColor: 'var(--colors-blue-air)',
  borderWidth: 'var(--spacings-1)',
  color: 'var(--colors-blue-500)',
  fontSize: 'var(--fontSizes-md)',
  padding: 'var(--spacings-2)',
  width: '100%',

  '&:focus': {
    outline: 'none',
    borderColor: 'var(--colors-blue-500)',
  },

  ...(props.disabled && {
    '&:disabled': {
      backgroundColor: 'var(--colors-blue-air)',
      color: 'var(--colors-blue-500)',
      cursor: 'not-allowed',
    },
  }),
}));

export default Select;
