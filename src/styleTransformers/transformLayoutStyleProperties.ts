import { LayoutProps } from '../types';

type TSize = number | string;

export type LayoutStyleProperties = {
    width: TSize;
    height: TSize;
    left: TSize;
    top: TSize;
};

const transformSize = (size: TSize): number => {
    if (typeof size === 'number') {
        return size;
    }
    return parseInt(size);
};

export const transformLayoutStyleProperties = (styles?: LayoutStyleProperties): LayoutProps => {
    if (!styles) {
        return {};
    }
    return {
        width: transformSize(styles.width),
        height: transformSize(styles.height),
        x: transformSize(styles.left),
        y: transformSize(styles.top)
    };
};
