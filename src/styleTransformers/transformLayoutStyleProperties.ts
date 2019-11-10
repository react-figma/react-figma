import { LayoutProps } from '../types';
import { TSize, transformSize } from '../helpers/size';

export type LayoutStyleProperties = {
    width?: TSize;
    height?: TSize;
    left?: TSize;
    top?: TSize;
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
