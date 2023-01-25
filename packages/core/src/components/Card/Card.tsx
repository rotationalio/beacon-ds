import React from 'react';
import { CardBody, CardHeader, CardWrapper } from './Card.styles';
import { CardComposition, CardProps } from './Card.types';
import mergeClassnames from '../../utils/mergeClassnames';
import { getImgWrapperStyle } from './utils';

const hasHeaderElement = (
  child: React.ReactNode
): child is React.ReactElement =>
  React.isValidElement(child) && child.type === CardHeader;

// const isBodyElement = (child: React.ReactNode): child is React.ReactElement =>
//   React.isValidElement(child) && child.type === CardBody;

function Card<T>(props: CardProps & CardComposition & T) {
  const {
    as: Component,
    children,
    title,
    imgSrc,
    imgPosition,
    imgClassNames,
    ...rest
  } = props;

  const hasHeaderChildren = React.Children.toArray(children).some((child) =>
    hasHeaderElement(child)
  );

  let header = null;

  if (!hasHeaderChildren && title) {
    header = <CardHeader>{title}</CardHeader>;
  }

  const styleClasses = imgSrc && getImgWrapperStyle(imgPosition || 'top');

  return (
    <CardWrapper as={Component} classname={styleClasses} {...rest}>
      {imgSrc && (
        <div
          className={mergeClassnames(
            'mb-4',
            'rounded-lg',
            'overflow-hidden',
            imgClassNames
          )}
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      )}

      <div>
        {header}
        {children}
      </div>
    </CardWrapper>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;

Card.displayName = 'Card';

export default Card;
