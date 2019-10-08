import { messagePromise } from './helpers/messagePromise';

const transformNodesToTree = node => {
    return {
        width: node.width,
        height: node.height,
        style:
            (node.getPluginData && node.getPluginData('reactStyle') && JSON.parse(node.getPluginData('reactStyle'))) ||
            undefined,
        children: node.children && node.children.map(transformNodesToTree)
    };
};

const transformYogaToCoords = result => {
    return {
        x: result.left,
        y: result.top,
        width: result.width,
        height: result.height,
        children: result.children && result.children.map(transformYogaToCoords)
    };
};

export const yogaHandler = async node => {
    const result = await messagePromise({
        type: 'calculateLayout',
        value: transformNodesToTree(node)
    });
    return transformYogaToCoords(result);
};
