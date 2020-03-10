import { applyStyleToYogaNode } from '../yoga/applyStyleToYogaNode';
import { StyleSheet } from '..';

const transformToYogaNode = (yoga, cache, node, yogaParent, childId) => {
    const yogaNode = yoga.Node.create();
    cache.node = yogaNode;
    cache.nodeBatchId = node.nodeBatchId;
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

const transformCache = cache => {
    const result = cache.node.getComputedLayout();
    return {
        ...result,
        nodeBatchId: cache.nodeBatchId,
        ...(cache.children ? { children: cache.children.map(transformCache) } : {})
    };
};

export const yogaWorker = yoga => message => {
    if (!message.value || message.value.type !== 'calculateLayout' || !yoga) {
        return;
    }

    const props = message.value.value;

    const cache = {};
    const yogaRoot = transformToYogaNode(yoga, cache, props, null, null);

    yogaRoot.calculateLayout(props.width, props.height, yoga.DIRECTION_LTR);

    const value = transformCache(cache);

    parent.postMessage(
        {
            pluginMessage: {
                id: message.id,
                value
            }
        },
        '*'
    );
};
