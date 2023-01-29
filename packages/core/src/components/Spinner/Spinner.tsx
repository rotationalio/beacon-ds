import styled from 'styled-components';

type SpinnerSize = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
};
const Spinner = styled.div<SpinnerSize>((props) => ({
  ...(props.variant === 'light' && {
    border: '2px solid var(--colors-white-200)',
    borderTop: '2px solid var(--colors-white-500) ',
  }),

  ...(props.variant === 'dark' && {
    border: '2px solid var(--colors-white-200)',
    borderTop: '2px solid var(--colors-gray-900) ',
  }),

  borderRadius: '50%',
  ...(props.size === 'xs' && {
    height: '16px',
    width: '16px',
  }),
  ...(props.size === 'sm' && {
    height: '24px',
    width: '24px',
  }),
  ...(props.size === 'md' && {
    height: '48px',
    width: '48px',
  }),
  ...(props.size === 'lg' && {
    height: '120px',
    width: '120px',
  }),

  animation: 'spin 2s linear infinite',

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },

    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));
Spinner.defaultProps = {
  size: 'sm',
  variant: 'light',
};

Spinner.displayName = 'Spinner';

export default Spinner;
