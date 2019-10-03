export const propsAssign = <T>(fields: (keyof T)[]) => (node: T) => (props: T) => {
    fields.forEach(field => {
        if (props[field] !== undefined || props[field] != null) {
            node[field] = props[field];
        }
    });
};
