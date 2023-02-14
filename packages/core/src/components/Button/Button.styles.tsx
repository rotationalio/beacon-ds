import styled from 'styled-components';
import { BtnProps } from './Button';
type Props = Partial<BtnProps>;

const StyledButton = styled.button<Props>(({ disabled, isLoading }) => ({
  ...(isLoading && {
    cursor: 'not-allowed',
  }),
  ...(disabled && {
    cursor: 'not-allowed',
  }),
}));

export default StyledButton;
