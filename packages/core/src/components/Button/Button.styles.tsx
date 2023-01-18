import { cva } from 'class-variance-authority';

export const button = cva(['font-regular rounded-lg rounded-full px-2 py-2'], {
  variants: {
    intent: {
      primary: [
        'text-white text-xs bg-primary',
        'disabled:bg-primary-70',
        'hover:bg-primary-70',
        'transition duration-300 ease-out',
      ],
      secondary: [
        'text-white text-xs bg-secondary-100',
        'disabled:bg-secondary-70',
        'hover:bg-secondary-70',
        'transition duration-300 ease-out',
      ],
      error: ['text-white text-xs bg-danger-50'],
      warning: ['text-white text-xs bg-warning-50'],
    },
    size: {
      small: ['text-xs', 'py-1', 'px-2'],
      medium: ['text-sm', 'py-3', 'px-4'],
      large: ['text-base', 'py-4', 'px-7'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});
