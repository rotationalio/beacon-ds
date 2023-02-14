import { TSize } from "types"
import { BtnVariant } from './Button.types'
export const getAttr = (size: TSize) => {
    switch (size) {
        case 'xsmall':
            return {
                fontSize: 'var(--font-size-10)',
                padding: '4px 8px',
            }

        case 'small':
            return {
                fontSize: 'var(--font-size-12)',
                padding: '8px 16px',
            }
        case 'medium':
            return {
                fontSize: '14px',
                padding: '12px 24px',
            }
        case 'large':
            return {
                fontSize: '16px',
                padding: '16px 32px',
            }
        default:
            return {
                fontSize: '14px',
                padding: '12px 24px',
            }
    }
}

export const setDisabledCss = () => {
    return 'bg-neutral-200 border-neutral-200 text-neutral-400 cursor-not-allowed';
}

export const setFontSize = (size: TSize) => {
    switch (size) {
        case 'xsmall':
            return 'text-xs p-auto min-h-[28px]';

        case 'small':
            return 'text-sm p-auto min-h-[32px]';
        case 'medium':
            return 'text-base p-auto min-h-[44px]';
        case 'large':
            return 'text-lg p-auto min-h-[56px]';
        default:
            return 'text-base p-auto mih-[44px]';
    }
}

// style default ghost variant button
export const setGhostVariant = () => {
    return `text-neutral-600 text-md bg-white-900 border-2 border-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition duration-300 ease-out`
}

export const setBtnVariant = (variant: BtnVariant) => {

    switch (variant) {
        case 'primary':
            return `bg-blue-600 border-blue-600 hover:bg-blue-700 hover:shadow-xl active:bg-blue-800`;
        case 'secondary':
            return `bg-primary-400 border-primary-500 hover:bg-primary-500 active:bg-primary-500 `;
        case 'tertiary':
            return 'bg-secondary-900 border-secondary-900 hover:bg-secondary-800 active:secondary-800';
        case 'ghost':
            return setGhostVariant();
        default:
            setBtnVariant('primary');

    }
}



