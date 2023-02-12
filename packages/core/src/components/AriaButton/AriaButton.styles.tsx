import { cva } from 'class-variance-authority';

export const button = cva(['font-regular rounded-lg rounded-full px-2 py-2'], {
  variants: {
    intent: {
      primary: [
        'text-white text-xs bg-primary',
        'disabled:bg-primary-700',
        'hover:bg-primary-700',
        'transition duration-300 ease-out',
      ],
      secondary: [
        'text-white text-xs bg-primary-400',
        'disabled:bg-secondary-700',
        'hover:bg-secondary-700',
        'transition duration-300 ease-out',
      ],
      tertiary: [
        'text-white text-xs bg-secondary-900',
        'disabled:bg-secondary-900',
        'hover:bg-secondary-900',
        'transition duration-300 ease-out',
      ],
      ghost: 'bg-transparent',
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2', 'min-h-[28px]'],
      medium: ['text-base', 'py-3', 'px-4', 'min-h-[40px]'],
      large: ['text-xl', 'py-4', 'px-7', 'min-h-[50px]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});
