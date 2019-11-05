import * as React from 'react';
import * as renderers from './renderers';
// todo replace with webpack aliasing, install @types/react-reconciler
import * as createReconciler from './realm-adopted/react-reconciler';

import { GroupsProcessor } from './renderers/group/groupsProcessor';
import { PREGROUP_NODE_TYPE } from './renderers/group/pregroupNode';
import { addRoot } from './yoga';

const isReactFigmaNode = child => child.getPluginData && child.getPluginData('isReactFigmaNode');

const appendToContainerFactory = groupsProcessor => (parentNode, childNode) => {
    if (!childNode || !parentNode) {
        return;
    }

    if (childNode.type === PREGROUP_NODE_TYPE) {
        if (childNode.groupNode) {
            parentNode.appendChild(childNode.groupNode);
        } else {
            groupsProcessor.scheduleGroup(parentNode, childNode);
        }
    } else {
        parentNode.appendChild(childNode);
    }
};

const insertToContainer = (parentNode, newChildNode, beforeChildNode) => {
    if (!parentNode || !newChildNode || !beforeChildNode) {
        return;
    }
    const beforeChildIndex = parentNode.children.indexOf(beforeChildNode);
    parentNode.insertChild(beforeChildIndex, newChildNode);
};

const remove = childNode => {
    if (!childNode || childNode.removed) {
        return;
    }
    childNode.remove();
};

const renderInstance = (type, node, props) => {
    const instance = renderers[type](node)(props);
    if (!node) {
        instance.setPluginData('isReactFigmaNode', 'true');
    }
    return instance;
};

const getFirstChild = parentInstance => {
    if (parentInstance.children && parentInstance.children.length > 0) {
        return parentInstance.children.find(isReactFigmaNode);
    }
};

const getNextChildren = instance => {
    if (!instance || !instance.parent) {
        return;
    }
    const parent = instance.parent;
    const instanceIndex = parent.children.indexOf(instance);
    return parent.children.slice(instanceIndex + 1).find(isReactFigmaNode);
};

export const render = async (jsx: any, rootNode) => {
    const groupsProcessor = new GroupsProcessor();
    const appendToContainer = appendToContainerFactory(groupsProcessor);

    const HostConfig = {
        now: Date.now,
        getRootHostContext: () => {
            return true;
        },
        prepareForCommit: () => {},
        resetAfterCommit: () => {},
        getChildHostContext: () => {
            return true;
        },
        shouldSetTextContent: () => false,
        getPublicInstance: instance => {
            return instance;
        },
        createInstance: (type, props) => {
            return renderInstance(type, null, props);
        },
        createTextInstance: () => {},
        resetTextContent: () => {},
        appendInitialChild: (parentNode, childNode) => {
            appendToContainer(parentNode, childNode);
        },
        appendChild: (parentNode, childNode) => {
            appendToContainer(parentNode, childNode);
        },
        insertBefore: (parentNode, newChildNode, beforeChildNode) => {
            insertToContainer(parentNode, newChildNode, beforeChildNode);
        },
        finalizeInitialChildren: (element, type) => {
            return type === 'page';
        },
        supportsMutation: true,
        supportsHydration: true,
        appendChildToContainer: (parentNode, childNode) => {
            appendToContainer(parentNode, childNode);
            addRoot(childNode);
        },
        insertInContainerBefore: () => {},
        removeChildFromContainer: () => {},
        prepareUpdate: () => {
            return true;
        },
        commitUpdate: (node, updatePayload, type, oldProps, newProps) => {
            renderInstance(type, node, newProps);
        },
        commitTextUpdate: () => {},
        removeChild: (parentNode, childNode) => {
            remove(childNode);
        },
        canHydrateInstance: (instance, type, props) => {
            if (!isReactFigmaNode(instance) || instance.type.toLowerCase() !== type) {
                return null;
            }
            return instance;
        },
        hydrateInstance: (instance, type, props) => {
            return renderInstance(type, instance.type.toLowerCase() === type ? instance : null, props);
        },
        getFirstHydratableChild: parentInstance => {
            return getFirstChild(parentInstance);
        },
        getNextHydratableSibling: instance => {
            return getNextChildren(instance);
        },
        didNotHydrateContainerInstance: () => {},
        didNotFindHydratableContainerInstance: () => {},
        didNotFindHydratableInstance: () => {},
        didNotFindHydratableTextInstance: () => {},
        didNotHydrateInstance: () => {},
        commitMount: (instance, type) => {
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
