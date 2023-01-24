import styled from 'styled-components';
import Box from '../Box';
export const CardWrapper = styled(Box)`
 position: 'relative',
  background:
    'var(--colors-white)',
  borderRadius: 'var(--border-radius-2)',
  boxShadow: 'var(--card-shadow)',
  border: '1px solid var(--colors-blue-air)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  padding: 'var(--spacings-4)',
  color: 'var(--colors-blue-500)',
  transition: 'all 0.3s ease-in-out',
`;
export const CardHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTopLeftRadius: 'var(--border-radius-1)',
  borderTopRightRadius: 'var(--border-radius-1)',
  minHeight: 'var(--space-8)',
  padding: '0px 24px',
  fontWeight: 500,
});

CardHeader.displayName = 'CardHeader';

export const CardBody = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
  padding: 'var(--spacings-4)',
});

CardBody.displayName = 'CardBody';
