import styled from 'styled-components';
import Box from '../Box';
export const StyledCard = styled.div({
  backgroundColor: 'var(--colors-white)',
  borderRadius: 'var(--radius-md)',
  boxShadow: 'var(--shadows-1)',
});

export const StyledContent = styled(Box)`
  padding: 'var(--spacings-4)';
`;
