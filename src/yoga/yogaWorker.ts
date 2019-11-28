import * as yoga from 'yoga-layout-prebuilt';
import { applyStyleToYogaNode } from './applyStyleToYogaNode';
import { StyleSheet } from '../index';

const transformToYogaNode = (yoga, cache, node, yogaParent, childId) => {
    const yogaNode = yoga.Node.create();
    cache.node = yogaNode;
    if (node.width && node.height && !node.children) {
        yogaNode.setWidth(node.width);
        yogaNode.setHeight(node.height);
    }
    if (node.style) {
        applyStyleToYogaNode(yogaNode, StyleSheet.flatten(node.style));
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

const transformCache = cache => {
    const result = cache.node.getComputedLayout();

    return {
        ...result,
        ...(cache.children ? { children: cache.children.map(child => transformCache(child)) } : {})
    };
};

export const yogaWorker = props => {
    const cache = {};
    const yogaRoot = transformToYogaNode(yoga, cache, props, null, null);

    yogaRoot.calculateLayout(props.width, props.height, yoga.DIRECTION_LTR);

    return transformCache(cache);
};
