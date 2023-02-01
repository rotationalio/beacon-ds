import styled from 'styled-components';
import { ToastWithRadixProps } from './Toast.types';

const StyledToast = styled.div<ToastWithRadixProps>((props) => ({
  ...(props.variant === 'default' && {
    backgroundColor: 'var(--colors-gray-100)',
    color: 'var(--colors-gray-900)',
  }),
  ...(props.variant === 'primary' && {
    backgroundColor: 'var(--colors-primary)',
    color: 'var(--colors-white)',
  }),
  ...(props.variant === 'secondary' && {
    backgroundColor: 'var(--colors-secondary)',
    color: 'var(--colors-white)',
  }),
  ...(props.variant === 'success' && {
    backgroundColor: 'var(--colors-green)',
    color: 'var(--colors-white)',
  }),
  ...(props.variant === 'danger' && {
    backgroundColor: 'var(--colors-red)',
    color: 'var(--colors-white)',
  }),
  ...(props.variant === 'warning' && {
    backgroundColor: 'var(--colors-yellow)',
    color: 'var(--colors-gray-900)',
  }),
  ...(props.variant === 'info' && {
    backgroundColor: 'var(--colors-blue)',
    color: 'var(--colors-white)',
  }),
}));

StyledToast.defaultProps = {
  variant: 'default',
} as Partial<ToastWithRadixProps>;

export default StyledToast;
