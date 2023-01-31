import { TSize } from "types"
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

export const setFontSize = (size: TSize) => {
    switch (size) {
        case 'xsmall':
            return 'text-xs py-1 px-2';

        case 'small':
            return 'text-sm py-1 px-2';
        case 'medium':
            return 'text-base py-3 px-4';
        case 'large':
            return 'text-lg py-4 px-7';
        default:
            return 'text-base py-3 px-4';
    }
}

// style default ghost variant button
export const setGhostVariant = () => {
    return 'text-neutral-600 text-md bg-white-900 border-2 border-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition duration-300 ease-out'
}



