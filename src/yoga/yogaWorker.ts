import { applyStyleToYogaNode } from './applyStyleToYogaNode';
import { StyleSheet } from '../index';

const transformToYogaNode = (yoga, cache, node, yogaParent, childId) => {
    const yogaNode = yoga.Node.create();
    cache.node = yogaNode;
    cache.nodeBatchId = node.nodeBatchId;
    cache.reactId = node.reactId;
    if (node.width && node.height && !node.children) {
        yogaNode.setWidth(node.width);
        yogaNode.setHeight(node.height);
    }
    if (node.style) {
        applyStyleToYogaNode(yoga)(yogaNode, StyleSheet.flatten(node.style));
    }
    if (node.children) {
        node.children.forEach((child, id) => {
            const newCache = {};
            if (!cache.children) {
                cache.children = [];
            }
            cache.children.push(newCache);
            transformToYogaNode(yoga, newCache, child, yogaNode, id);
        });
    }
    if (yogaParent) {
        yogaParent.insertChild(yogaNode, childId);
    }
    return yogaNode;
};

const transformCache = (cache) => {
    const result = cache.node.getComputedLayout();
    return {
        ...result,
        nodeBatchId: cache.nodeBatchId,
        reactId: cache.reactId,
        ...(cache.children ? { children: cache.children.map(transformCache) } : {}),
    };
};

export const yogaWorker = (yoga) => (props) => {
    const cache = {};
    const yogaRoot = transformToYogaNode(yoga, cache, props, null, null);

    yogaRoot.calculateLayout(props.width, props.height, yoga.DIRECTION_LTR);

    const value = transformCache(cache);

    return value;
};
