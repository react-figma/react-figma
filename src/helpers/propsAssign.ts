export const propsAssign = <T, D extends T>(fields: (keyof T)[], defaultValues?: D) => <N extends T>(node: N) => <
    P extends T
>(
    props: P
) => {
    fields.forEach(field => {
        if (props[field] !== undefined) {
            node[field] = props[field] as any; // same type is assumed
        } else if (defaultValues && defaultValues[field] !== undefined) {
            node[field] = defaultValues[field] as any;
        }
    });
};
