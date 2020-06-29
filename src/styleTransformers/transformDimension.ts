type ValueWithDimension =
    | {
          value: number;
          type: 'px' | 'percentage';
      }
    | {
          type: 'auto';
      };

export const transformDimension = (value: string | number): ValueWithDimension => {
    if (value === 'auto') {
        return { type: 'auto' };
    }
    return {
        value: typeof value == 'number' ? value : parseFloat(value),
        type: typeof value == 'number' || value.indexOf('%') < 0 ? 'px' : 'percentage',
    };
};

type ValueWithDimensionMapper<A, B, C> = {
    px: (f: (number) => A) => ValueWithDimensionMapper<A, B, C>;
    percentage: (f: (number) => B) => ValueWithDimensionMapper<A, B, C>;
    auto: (f: () => C) => ValueWithDimensionMapper<A, B, C>;
    value: () => A | B | C;
};

export const transformDimensionMapper = <A, B, C>(value: string | number): ValueWithDimensionMapper<A, B, C> => {
    const result = transformDimension(value);
    let returned;
    const holder = {
        px: (f) => {
            if (result.type === 'px') {
                returned = f(result.value);
            }
            return holder;
        },
        percentage: (f) => {
            if (result.type === 'percentage') {
                returned = f(result.value);
            }
            return holder;
        },
        auto: (f) => {
            if (result.type === 'auto') {
                returned = f();
            }
            return holder;
        },
        value: () => {
            return returned;
        },
    };
    return holder;
};
