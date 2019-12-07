import * as React from 'react';
import * as renderers from './renderers';

// * Development version of react-reconciler can't be used inside Figma realm.
import * as createReconciler from 'react-reconciler/cjs/react-reconciler.production.min';

import { updateYogaRoot } from './yoga/yogaStream';
import { isReactFigmaNode } from './isReactFigmaNode';
import { setTextChildren } from './hooks/useTextChildren';

let lastPage;

const cleanGroupStubElement = parentNode => {
    if (parentNode.type === 'GROUP') {
        parentNode.children.forEach(child => {
            if (child.getPluginData('isGroupStubElement')) {
                child.remove();
            }
        });
    }
};

const setTextInstance = (parentNode, childNode) => {
    childNode.parent = parentNode;
    setTextChildren(parentNode, childNode.value);
};

const appendToContainer = (parentNode, childNode) => {
    if (!childNode || !parentNode) {
        return;
    }

    if (childNode.type === 'TEXT_CONTAINER') {
        if (parentNode.type === 'TEXT') {
            setTextInstance(parentNode, childNode);
        }
    } else {
        parentNode.appendChild(childNode);
    }
    cleanGroupStubElement(parentNode);
};

const insertToContainer = (parentNode, newChildNode, beforeChildNode) => {
    if (!parentNode || !newChildNode || !beforeChildNode) {
        return;
    }
    if (newChildNode.type === 'TEXT_CONTAINER') {
        if (parentNode.type === 'TEXT') {
            setTextInstance(parentNode, newChildNode);
        }
    } else {
        const beforeChildIndex = parentNode.children.indexOf(beforeChildNode);
        parentNode.insertChild(beforeChildIndex, newChildNode);
    }
    cleanGroupStubElement(parentNode);
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
    if (type === 'page' && props.isCurrent) {
        lastPage = instance;
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

const checkInstanceMatchType = (instance, type) => {
    if (instance.type.toLowerCase() === type) {
        return true;
    }
    if (instance.type === 'FRAME' && type === 'svg') {
        return true;
    }
    return false;
};

export const render = async (jsx: any, rootNode) => {
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
        createTextInstance: (text, rootContainerInstance, hostContext, internalInstanceHandle) => {
            return { type: 'TEXT_CONTAINER', value: text };
        },
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
            updateYogaRoot(childNode);
        },
        insertInContainerBefore: () => {},
        removeChildFromContainer: () => {},
        prepareUpdate: () => {
            return true;
        },
        commitUpdate: (node, updatePayload, type, oldProps, newProps) => {
            renderInstance(type, node, newProps);
        },
        commitTextUpdate: (textInstance, oldText, newText) => {
            if (textInstance.type === 'TEXT_CONTAINER') {
                textInstance.value = newText;
            }
            if (textInstance.type === 'TEXT_CONTAINER' && textInstance.parent) {
                setTextChildren(textInstance.parent, newText);
            }
        },
        removeChild: (parentNode, childNode) => {
            remove(childNode);
        },
        canHydrateInstance: (instance, type, props) => {
            if (!isReactFigmaNode(instance) || !checkInstanceMatchType(instance, type)) {
                return null;
            }
            return instance;
        },
        hydrateInstance: (instance, type, props) => {
            return renderInstance(type, checkInstanceMatchType(instance, type) ? instance : null, props);
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
        commitMount: (instance, type) => {},
        commitHydratedContainer: container => {
            container.children.forEach(child => {
                if (isReactFigmaNode(child)) {
                    updateYogaRoot(child);
                }
            });
        }
    };

    const reconciler = createReconciler(HostConfig);

    const container = reconciler.createContainer(rootNode, true, true);
    lastPage = figma.currentPage;
    const tempPage = figma.createPage();
    figma.currentPage = tempPage;
    reconciler.updateContainer(jsx, container);
    figma.currentPage = lastPage;
    tempPage.remove();
};
