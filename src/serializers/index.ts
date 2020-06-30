export const serializeProps = props => {
    const result = {};
    Object.keys(props).forEach(propKey => {
        const value = props[propKey];
        if (typeof value !== 'function') {
            result[propKey] = value;
        }
    });

    return result;
};
