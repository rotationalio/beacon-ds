import { cva } from 'class-variance-authority';

export const input = cva(
  ['beacon-px-4 beacon-py-2 beacon-font-sm beacon-rounded-md beacon-text-sm'],
  {
    variants: {
      size: {
        small: ['beacon-text-xs', 'beacon-py-1', 'beacon-px-2'],
        medium: ['beacon-text-sm', 'beacon-py-3', 'beacon-px-4'],
        large: ['beacon-text-base', 'beacon-py-4', 'beacon-px-7'],
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);
