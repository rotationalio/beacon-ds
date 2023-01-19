import { cva } from 'class-variance-authority';

export const input = cva(['px-4 py-2 font-sm rounded-md text-sm'], {
  variants: {
    size: {
      small: ['text-xs', 'py-1', 'px-2'],
      medium: ['text-sm', 'py-3', 'px-4'],
      large: ['text-base', 'py-4', 'px-7'],
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
