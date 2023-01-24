export const getImgWrapperStyle = (imgPosition: string) => {

    switch (imgPosition) {
        case 'top':
            return {
                flexDirection: 'column',
            };
        case 'bottom':
            return {
                flexDirection: 'column-reverse',
            };
        case 'left':
            return {
                flexDirection: 'row',
            };
        case 'right':
            return {
                flexDirection: 'row-reverse',
            };
        default:
            return {
                flexDirection: 'column',
            };
    }


}