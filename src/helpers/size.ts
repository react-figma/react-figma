export type TSize = number | string;

export const transformSize = (size: TSize): number => {
    if (typeof size === 'number') {
        return size;
    }
    return parseInt(size);
};
