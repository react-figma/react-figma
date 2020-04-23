export const removeTempId = node => {
    if (node && node.pluginData) {
        delete node.pluginData.tempId;
    }
    if (node && node.children) {
        node.children.forEach(removeTempId);
    }
    return node;
};
