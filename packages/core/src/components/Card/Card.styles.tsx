import react from 'react';
import mergeClassnames from '../../utils/mergeClassnames';
// later we  could handle image position
// and size inside the component

export interface CardProps {
  children: react.ReactNode;
  className?: string;
  hasTitle?: boolean;
}

export interface WrapperCardProps {
  children: react.ReactNode;
  className?: string;
  hasTitle?: boolean;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  const rootStyle = mergeClassnames(
    'bg-white shadow-md rounded-lg overflow-hidden',
    className
  );

  return (
    <div className={rootStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;
