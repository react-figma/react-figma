export const propsAssign = (fields: Array<string>) => (node: Object) => (props: Object) => {
    fields.forEach(field => {
        if (props[field]) {
            node[field] = props[field];
        }
    });
};
