import styled from 'styled-components';

export const Input = styled.input({
  outline: 'none',
  border: '1px solid',
  '&:focus': {
    borderColor: 'var(--colors-primary-900)',
  },
  '&[aria-invalid=true]': {
    borderColor: 'var(--colors-danger-500)',
  },
});
