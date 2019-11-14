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

type ValueWithDimensionMapper = {
    px: (f) => ValueWithDimensionMapper;
    percentage: (f) => ValueWithDimensionMapper;
};

export const transformDimensionMapper = (value: string | number): ValueWithDimensionMapper => {
    const result = transformDimension(value);
    const holder = {
        px: f => {
            if (result.type === 'px') {
                f(result.value);
            }
            return holder;
        },
        percentage: f => {
            if (result.type === 'percentage') {
                f(result.value);
            }
            return holder;
        }
    };
    return holder;
};
