import { BorderProps } from '../types';

type TSize = number | string;

export type BorderStyleProperties = {
    borderRadius?: TSize;
    borderBottomLeftRadius?: TSize;
    borderBottomRightRadius?: TSize;
    borderTopLeftRadius?: TSize;
    borderTopRightRadius?: TSize;
};

const transformSize = (size: TSize): number => {
    if (typeof size === 'number') {
        return size;
    }
    return parseInt(size);
};

export const transformBorderStyleProperties = (styles?: BorderStyleProperties): BorderProps => {
    if (!styles) {
        return {};
    }

    const border: BorderProps = {};

    if (styles.borderRadius) {
        border.topLeftRadius = transformSize(styles.borderRadius);
        border.topRightRadius = transformSize(styles.borderRadius);
        border.bottomLeftRadius = transformSize(styles.borderRadius);
        border.bottomRightRadius = transformSize(styles.borderRadius);
    }
    if (styles.borderTopLeftRadius) {
        border.topLeftRadius = transformSize(styles.borderTopLeftRadius);
    }
    if (styles.borderTopRightRadius) {
        border.topLeftRadius = transformSize(styles.borderTopRightRadius);
    }
    if (styles.borderBottomLeftRadius) {
        border.topLeftRadius = transformSize(styles.borderBottomLeftRadius);
    }
    if (styles.borderBottomRightRadius) {
        border.topLeftRadius = transformSize(styles.borderBottomRightRadius);
    }

    return border;
};
