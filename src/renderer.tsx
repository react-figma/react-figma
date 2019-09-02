import * as React from 'react';
import * as renderers from './renderers';
import { searchFor } from './helpers/searchFor';
const createReconciler = require('./realm-adopted/react-reconciler');
const { unstable_scheduleCallback, unstable_cancelCallback } = require('scheduler'); // eslint-disable-line camelcase

const nodesCache: {
    [reactId: string]: BaseNodeMixin;
} = {};

if (typeof figma !== 'undefined' && figma.root) {
    searchFor(
        figma.root,
        node => !!node.getPluginData('reactId') || parseInt(node.getPluginData('reactId')) === 0,
        results => {
            results.forEach(result => {
                nodesCache[result.getPluginData('reactId')] = result;
            });
        }
    );
}

const NO_CONTEXT = true;
const noop = () => {};

export const renderer = async (jsx: any, rootNode) => {
    const HostConfig = {
        schedulePassiveEffects: unstable_scheduleCallback, // eslint-disable-line camelcase
        cancelPassiveEffects: unstable_cancelCallback, // eslint-disable-line camelcase
        now: Date.now,
        getRootHostContext: () => NO_CONTEXT,
        prepareForCommit: noop,
        resetAfterCommit: () => {},
        getChildHostContext: () => NO_CONTEXT,
        shouldSetTextContent: () => false,
        getPublicInstance: instance => instance,
        createInstance: (type, props) => {
            debugger;
            return renderers[type](props);
        },
        createTextInstance: text => {
            debugger;
        },
        resetTextContent: node => {
            debugger;
        },
        // Append root node to a container
        appendInitialChild: (parentNode, childNode) => {
            debugger;
            parentNode.appendChild(childNode);
        },
        appendChild: (parentNode, childNode) => {
            debugger;
            parentNode.appendChild(childNode);
        },
        insertBefore: (parentNode, newChildNode, beforeChildNode) => {
            debugger;
        },
        finalizeInitialChildren: noop,
        supportsMutation: true,
        appendChildToContainer: (parentNode, childNode) => {
            debugger;
            parentNode.appendChild(childNode);
        },
        insertInContainerBefore: (parentNode, newChildNode, beforeChildNode) => {
            debugger;
        },
        removeChildFromContainer: (parentNode, childNode) => {
            debugger;
        },
        prepareUpdate: () => true,
        commitUpdate: (node, updatePayload, type, oldProps, newProps) => {
            debugger;
        },
        commitTextUpdate: (node, oldText, newText) => {
            debugger;
        },
        removeChild: (parentNode, childNode) => {
            debugger;
        }
    };

    const reconciler = createReconciler(HostConfig);
    const container = reconciler.createContainer(rootNode, false, false);
    reconciler.updateContainer(jsx, container);
};
