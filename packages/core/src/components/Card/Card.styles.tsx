import styled from 'styled-components';
import Box from '../Box';
export const CardWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 'var(--border-radius-1)',
  border: '1px solid var(--colors-neutral-50)',
  boxShadow: 'var(--shadow-1)',
  overflow: 'hidden',
  backgroundColor: 'var(--colors-white)',
  padding: 'var(--spacings-4)',
});

export const CardHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
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
