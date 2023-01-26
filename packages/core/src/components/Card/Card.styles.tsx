import styled from 'styled-components';
import Box from '../Box';
export const CardWrapper = styled(Box)({
  display: 'flex',
  borderRadius: 'var(--border-radius-1)',
  border: '1px solid var(--colors-neutral-50)',
  boxShadow: 'var(--shadow-1)',
  overflow: 'hidden',
  padding: 'var(--spacings-2)',
});

export const CardHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  borderTopLeftRadius: 'var(--border-radius-1)',
  borderTopRightRadius: 'var(--border-radius-1)',
  minHeight: 'var(--spacings-8)',
  paddingBottom: 'var(--spacings-2)',
  fontWeight: 500,
});

CardHeader.displayName = 'CardHeader';

export const CardBody = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
});

CardBody.displayName = 'CardBody';
