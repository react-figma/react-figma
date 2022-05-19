export const removeKey = node => {
    if (node && node.key) {
        delete node.key;
    }
    if (node && node.children) {
        node.children.forEach(removeKey);
    }
    return node;
};
