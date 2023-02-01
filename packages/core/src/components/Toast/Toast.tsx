import * as React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import StyledToast from './Toast.styles';
import { ToastWithRadixProps } from './Toast.types';

export const Toast = React.forwardRef<HTMLDivElement, ToastWithRadixProps>(
  (props, ref) => {
    const {
      children,
      title,
      description,
      titleClassName,
      descriptionClassName,
      duration = 5000,
      isOpen,
      onClose,
      ...rest
    } = props;
    return (
      <RadixToast.Provider>
        <RadixToast.Root duration={duration} open={isOpen} ref={ref}>
          <StyledToast {...rest}>
            {title && (
              <RadixToast.Title className={titleClassName}>
                {title}
              </RadixToast.Title>
            )}

            {description && (
              <RadixToast.Description className={descriptionClassName}>
                {description}
              </RadixToast.Description>
            )}
            {onClose && <RadixToast.Close />}
          </StyledToast>
        </RadixToast.Root>
      </RadixToast.Provider>
    );
  }
);

export default Toast;
