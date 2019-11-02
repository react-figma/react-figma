export const propsAssign = <T>(fields: (keyof T)[]) => <N extends T>(node: N) => <P extends T>(props: P) => {
    fields.forEach(field => {
        if (props[field] !== undefined) {
            node[field] = props[field] as any; // same type is assumed
        }
    });
};
