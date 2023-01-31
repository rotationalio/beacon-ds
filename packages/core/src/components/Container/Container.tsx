import { forwardRef } from 'react';
import mergeClassnames from '../../utils/mergeClassnames';
import { ContainerVariant } from './Container.types';
import { setVariantStyle, CONTAINER_VARIANT } from './utils';
export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  [key: string]: any; // key value pair for any other props like data-testid or aria-label etc
  variant?: ContainerVariant;
  dash?: boolean;
  brk?: 'sm' | 'md' | 'lg' | 'xl'; // breakpoint
} & React.HTMLAttributes<HTMLDivElement>;

const Container = forwardRef((props: ContainerProps, ref: any) => {
  const { children, className, style, variant, dash, brk, as, ...rest } = props;
  const Component = as || 'div';
  const mergeClassname = mergeClassnames(
    brk ? `container-${brk} mx-auto px-4` : 'container mx-auto px-4',
    dash && setVariantStyle(CONTAINER_VARIANT.DASH),
    variant && setVariantStyle(variant || CONTAINER_VARIANT.DEFAULT),
    className
  );
  return (
    <Component className={mergeClassname} style={style} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default Container;
