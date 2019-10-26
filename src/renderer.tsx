import * as React from 'react';
import * as renderers from './renderers';
// todo replace with webpack aliasing, install @types/react-reconciler
import * as createReconciler from './realm-adopted/react-reconciler';

import { GroupsProcessor } from './renderers/group/groupsProcessor';
import { PREGROUP_NODE_TYPE } from './renderers/group/pregroupNode';

const isReactFigmaNode = child => child.getPluginData && child.getPluginData('isReactFigmaNode');

export const render = async (jsx: any, rootNode) => {
    const groupsProcessor = new GroupsProcessor();

    const HostConfig = {
        now: Date.now,
        getRootHostContext: (...args) => {
            console.log('getRootHostContext', ...args);
            return true;
        },
        prepareForCommit: (...args) => {
            console.log('prepareForCommit', ...args);
        },
        resetAfterCommit: (...args) => {
            console.log('resetAfterCommit', ...args);
        },
        getChildHostContext: (...args) => {
            console.log('getChildHostContext', ...args);
            return true;
        },
        shouldSetTextContent: () => false,
        getPublicInstance: instance => {
            console.log('getPublicInstance', instance);
            return instance;
        },
        createInstance: (type, props, ...other) => {
            console.log('createInstance', type, props, ...other);
            const instance = renderers[type]()(props);
            try {
                instance.setPluginData('isReactFigmaNode', 'true');
            } catch (e) {
                console.log(e);
            }
            return instance;
        },
        createTextInstance: text => {
            console.log('createTextInstance', text);
        },
        resetTextContent: node => {
            console.log('resetTextContent', node);
        },
        // Append root node to a container
        appendInitialChild: (parentNode, childNode) => {
            console.log('appendInitialChild', parentNode, childNode);

            if (childNode.type === PREGROUP_NODE_TYPE) {
                groupsProcessor.scheduleGroup(parentNode, childNode);
            } else {
                parentNode.appendChild(childNode);
            }
        },
        appendChild: (parentNode, childNode) => {
            console.log('appendChild', parentNode, childNode);

            if (childNode.type === PREGROUP_NODE_TYPE) {
                if (childNode.groupNode) {
                    parentNode.appendChild(childNode.groupNode);
                } else {
                    groupsProcessor.scheduleGroup(parentNode, childNode);
                }
            } else {
                parentNode.appendChild(childNode);
            }
        },
        insertBefore: (parentNode, newChildNode, beforeChildNode) => {
            console.log('insertBefore', parentNode, newChildNode, beforeChildNode);
            const beforeChildIndex = parentNode.children.indexOf(beforeChildNode);
            parentNode.insertChild(beforeChildIndex, newChildNode);
        },
        finalizeInitialChildren: (element, type, ...args) => {
            console.log('finalizeInitialChildren', type, ...args);

            return type === 'page';
        },
        supportsMutation: true,
        supportsHydration: true,
        appendChildToContainer: (parentNode, childNode) => {
            console.log('appendChildToContainer', parentNode, childNode);
            parentNode.appendChild(childNode);
        },
        insertInContainerBefore: (parentNode, newChildNode, beforeChildNode) => {
            console.log('insertInContainerBefore', parentNode, newChildNode, beforeChildNode);
        },
        removeChildFromContainer: (parentNode, childNode) => {
            console.log('removeChildFromContainer', parentNode, childNode);
        },
        prepareUpdate: (...args) => {
            console.log('prepareUpdate', ...args);
            return true;
        },
        commitUpdate: (node, updatePayload, type, oldProps, newProps) => {
            renderers[type](node)(newProps);
            console.log('commitUpdate', node, updatePayload, type, oldProps, newProps);
        },
        commitTextUpdate: (node, oldText, newText) => {
            console.log('commitTextUpdate', node, oldText, newText);
        },
        removeChild: (parentNode, childNode) => {
            console.log('removeChild', parentNode, childNode);
            childNode.remove();
        },
        canHydrateInstance: (instance, type, props) => {
            console.log('canHydrateInstance', instance, type, props);
            if (!isReactFigmaNode(instance) || instance.type.toLowerCase() !== type) {
                return null;
            }
            return instance;
        },
        hydrateInstance: (instance, type, props) => {
            console.log('hydrateInstance', instance, type, props);
            return renderers[type](instance.type.toLowerCase() === type ? instance : null)(props);
        },
        getFirstHydratableChild: parentInstance => {
            console.log('getFirstHydratableChild', parentInstance);
            if (parentInstance.children && parentInstance.children.length > 0) {
                return parentInstance.children.find(isReactFigmaNode);
            }
        },
        getNextHydratableSibling: instance => {
            console.log('getNextHydratableSibling', instance);
            if (!instance || !instance.parent) {
                return;
            }
            const parent = instance.parent;
            console.log('getNextHydratableSibling:children', parent.children);
            const instanceIndex = parent.children.indexOf(instance);
            console.log('getNextHydratableSibling:instanceIndex', instanceIndex);
            return parent.children.slice(instanceIndex + 1).find(isReactFigmaNode);
        },
        didNotHydrateContainerInstance: (...args) => {
            console.log('didNotHydrateContainerInstance', ...args);
        },
        didNotFindHydratableContainerInstance: (...args) => {
            console.log('didNotFindHydratableContainerInstance', ...args);
        },
        didNotFindHydratableInstance: (...args) => {
            console.log('didNotFindHydratableInstance', ...args);
        },
        didNotHydrateInstance: (parentType, parentProps, parentInstance, instance) => {
            console.log('didNotHydrateInstance', parentType, parentProps, parentInstance, instance);
            if (isReactFigmaNode(instance)) {
                instance.remove();
            }
        },
        commitMount: (instance, type, newProps, internalInstanceHandle) => {
            console.log('commitMount', instance, type, newProps, internalInstanceHandle);

            if (type === 'page') {
                groupsProcessor.mountGroups();
            }
        }
    };

    const reconciler = createReconciler(HostConfig);

    const container = reconciler.createContainer(rootNode, true, true);
    const lastPage = figma.currentPage;
    const tempPage = figma.createPage();
    figma.currentPage = tempPage;
    reconciler.updateContainer(jsx, container);
    figma.currentPage = lastPage;
    tempPage.remove();
};
