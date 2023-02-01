import { ToastProps as RadixToastProps } from '@radix-ui/react-toast';
export type ToastProps = {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';
  size?: 'small' | 'medium' | 'large';
  [key: string]: any;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  onClose?: () => void;
};

export type ToastWithRadixProps = ToastProps & RadixToastProps;
