export const mapFigmaNodeToYogaTreeNode = node => {
    return {
        width: node.width,
        height: node.height,
        type: node.type,
        style:
            (node.getPluginData && node.getPluginData('reactStyle') && JSON.parse(node.getPluginData('reactStyle'))) ||
            undefined
    };
};
