import { ModalUnstyledOwnProps } from '@mui/base/ModalUnstyled';
import { TSize } from 'types';

export type ModalProps = {
  title?: React.ReactNode;
  containerClassName?: string;
  fullScreen?: boolean;
  size?: TSize;
  titleProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
} & ModalUnstyledOwnProps;

export type ModalContainerProps = {
  fullScreen?: boolean;
  size?: TSize;
};
