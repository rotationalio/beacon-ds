import { ModalUnstyledOwnProps } from '@mui/base/ModalUnstyled';
import { Size } from 'types';

export type ModalProps = {
  title?: React.ReactNode;
  containerClassName?: string;
  fullScreen?: boolean;
  size?: Size;
  titleProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
} & ModalUnstyledOwnProps;

export type ContainerProps = {
  fullScreen?: boolean;
  size?: Size;
};
