export const getImgWrapperStyle = (imgPosition: string) => {

    switch (imgPosition) {
        case 'top':
            return 'column';
        case 'bottom':
            return 'column-reverse';
        case 'left':
            return 'flex items-center';
        case 'right':
            return 'row-reverse';
        default:
            return 'column';
    }


}