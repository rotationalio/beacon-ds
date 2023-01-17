import { cva } from 'class-variance-authority';

export const button = cva(
  [
    'beacon-font-regular beacon-rounded-lg beacon-rounded-full beacon-px-3 beacon-py-2',
  ],
  {
    variants: {
      intent: {
        primary: [
          'beacon-text-white beacon-text-xs beacon-bg-primary-900',
          'disabled:beacon-bg-primary-700',
          'hover:beacon-bg-primary-700',
          'beacon-transition beacon-duration-300 beacon-ease-out',
        ],
        secondary: [
          'beacon-text-white beacon-text-xs beacon-bg-secondary-900',
          'disabled:beacon-bg-secondary-700',
          'hover:beacon-bg-secondary-700',
          'beacon-transition beacon-duration-300 beacon-ease-out',
        ],
        error: ['beacon-text-white beacon-text-xs beacon-bg-danger-500'],
        warning: ['beacon-text-white beacon-text-xs beacon-bg-warning-500'],
      },
      size: {
        small: ['beacon-text-xs', 'beacon-py-1', 'beacon-px-2'],
        medium: ['beacon-text-sm', 'beacon-py-3', 'beacon-px-4'],
        large: ['beacon-text-base', 'beacon-py-4', 'beacon-px-7'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);
