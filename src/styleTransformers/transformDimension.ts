type ValueWithDimension = {
    value: number;
    type: 'px' | 'percentage';
};

export const transformDimension = (value: string | number): ValueWithDimension => {
    return {
        value: typeof value == 'number' ? value : parseFloat(value),
        type: typeof value == 'number' || value.indexOf('%') < 0 ? 'px' : 'percentage'
    };
};
