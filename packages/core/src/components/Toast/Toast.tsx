import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { ToastWithRadixProps } from './Toast.types';
import mergeClassnames from '../../utils/mergeClassnames';
import {
  SuccessIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
  XIcon,
} from '../Icon/Icons';
import { getToastBgVariantStyle, getToastColorVariantStyle } from './util';
export const Toast = React.forwardRef<HTMLLIElement, ToastWithRadixProps>(
  (props, ref) => {
    const {
      children,
      variant,
      title,
      description,
      duration = 5000,
      isOpen,
      onClose,
      hasIcon = false,
      placement = 'right',
    } = props;
    return (
      <ToastPrimitive.Provider swipeDirection={placement} duration={duration}>
        <ToastPrimitive.Root
          open={isOpen}
          ref={ref}
          onOpenChange={onClose}
          className={mergeClassnames(
            'z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg',
            'bg-white',
            variant && getToastBgVariantStyle(variant),
            'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
            'radix-state-closed:animate-toast-hide',
            'radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x',
            'radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x',
            'radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y',
            'radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y',
            'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
            'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
          )}
        >
          <div className="flex ">
            {hasIcon && (
              <div className="flex flex-shrink-0 items-center pl-5 py-4">
                {
                  {
                    success: <SuccessIcon className="h-5 w-5 text-white" />,
                    danger: <ErrorIcon className="h-5 w-5 text-white" />,
                    warning: <WarningIcon className="h-5 w-5 text-white" />,
                    primary: <InfoIcon className="h-5 w-5 text-white" />,
                    info: <InfoIcon className="h-5 w-5 text-white" />,
                    secondary: <></>,
                    default: <></>,
                  }[variant || 'default']
                }
              </div>
            )}
            <div className="w-0 flex-1 items-center pl-5 py-4">
              <div className="w-full radix">
                <ToastPrimitive.Title
                  className={mergeClassnames(
                    'text-sm font-medium text-gray-900',
                    variant && getToastColorVariantStyle(variant)
                  )}
                >
                  {title}
                </ToastPrimitive.Title>
                <ToastPrimitive.Description
                  className={mergeClassnames(
                    'mt-1 text-sm text-gray-700 ',
                    variant && getToastColorVariantStyle(variant)
                  )}
                >
                  {description}
                  {children}
                </ToastPrimitive.Description>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col px-2 space-y-1">
                <div className="h-0 flex-1 flex">
                  {onClose && (
                    <ToastPrimitive.Close
                      className={mergeClassnames(
                        'w-full  border-transparent px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700  hover:bg-gray-50  focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                        variant && getToastColorVariantStyle(variant)
                      )}
                    >
                      <XIcon
                        className={mergeClassnames(
                          'h-5 w-5',
                          variant && getToastColorVariantStyle(variant)
                        )}
                      />
                    </ToastPrimitive.Close>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ToastPrimitive.Root>

        <ToastPrimitive.Viewport />
      </ToastPrimitive.Provider>
    );
  }
);

export default Toast;
