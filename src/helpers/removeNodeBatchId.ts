export const removeNodeBatchId = node => {
    if (node && node.pluginData) {
        delete node.pluginData.nodeBatchId;
    }
    if (node && node.children) {
        node.children.forEach(removeNodeBatchId);
    }
    return node;
};
