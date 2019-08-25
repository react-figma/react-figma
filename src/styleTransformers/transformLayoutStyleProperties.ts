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
        ...(styles.width ? { width: transformSize(styles.width) } : {}),
        ...(styles.height ? { height: transformSize(styles.height) } : {}),
        ...(styles.left ? { x: transformSize(styles.left) } : {}),
        ...(styles.top ? { y: transformSize(styles.top) } : {})
    };
};
