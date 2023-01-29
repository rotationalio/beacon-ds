import styled from 'styled-components';
import { BtnProps } from './Btn';
type Props = Partial<BtnProps>;

const StyledBtn = styled.button<Props>((props) => ({
  ...(props.variant === 'primary' && {
    backgroundColor: 'var(--colors-blue-600)',
    borderColor: 'var(--colors-blue-600)',
    '&:hover': {
      backgroundColor: 'var(--colors-blue-700)',
    },
    '&:active': {
      backgroundColor: 'var(--colors-blue-700)',
    },
    ':disabled': {
      backgroundColor: 'var(--colors-blue-800)',
    },
  }),
  ...(props.variant === 'secondary' && {
    backgroundColor: 'var(--colors-primary-400)',
    '&:hover': {
      backgroundColor: 'var(--colors-primary-500)',
    },
    '&:active': {
      backgroundColor: 'var(--colors-primary-500)',
    },
    ':disabled': {
      backgroundColor: 'var(--colors-primary-300)',
    },
  }),
  ...(props.variant === 'tertiary' && {
    backgroundColor: 'var(--colors-secondary-900)',
    '&:hover': {
      backgroundColor: 'var(--colors-secondary-800)',
    },
    '&:active': {
      backgroundColor: 'var(--colors-secondary-700)',
    },
    ':disabled': {
      backgroundColor: 'var(--colors-secondary-700)',
    },
  }),

  ...(props.isLoading && {
    cursor: 'not-allowed',
  }),
  ...(props.disabled && {
    cursor: 'not-allowed',
  }),
}));
StyledBtn.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

export default StyledBtn;
