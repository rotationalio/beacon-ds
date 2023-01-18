import { FC } from 'react';
import { StyledCard, StyledContent } from './Card.styles';
import type { CardProps } from './Card.types';

// handle otter icon late

const Card: FC<CardProps> = ({
  children,
  containerClasses,
  contentClasses,
  ...props
}) => {
  return (
    <StyledCard className={containerClasses} {...props}>
      <StyledContent className={contentClasses}>{children}</StyledContent>
    </StyledCard>
  );
};

export default Card;
