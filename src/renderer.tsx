import * as React from 'react';
import * as renderers from './renderers';
import * as nanoid from 'nanoid/non-secure';

// * Development version of react-reconciler can't be used inside Figma realm.
import * as createReconciler from 'react-reconciler/cjs/react-reconciler.production.min';

import { updateYogaRoot } from './yoga/yogaStream';
import { setTextChildren } from './hooks/useTextChildren';
import { api } from './rpc';

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

const insertToContainer = (parentNode, newChildNode, beforeChildNode) => {
    if (!parentNode || !newChildNode || !beforeChildNode || parentNode.type === 'INSTANCE') {
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
    api.remove(childNode);
};

const getFirstChild = parentInstance => {
    if (parentInstance.children && parentInstance.children.length > 0) {
        return parentInstance.children[0];
    }
};

const getNextChildren = instance => {
    if (!instance || !instance.parent) {
        return;
    }
    const parent = instance.parent;
    const instanceIndex = parent.children.indexOf(instance);
    return parent.children.slice(instanceIndex + 1)[0];
};

const checkInstanceMatchType = (instance, type) => {
    console.log('checkInstanceMatchType', instance, type);
    if (instance.type.toLowerCase() === type) {
        return true;
    }
    if (instance.type === 'FRAME' && type === 'svg') {
        return true;
    }
    return false;
};

const reparent = node => {
    if (!node || !node.children) {
        return node;
    }
    const children = node.children.map(item =>
        reparent({
            ...item,
            parent: node
        })
    );
    return {
        ...node,
        children
    };
};

const appendToContainer = (parentNode, childNode) => {
    if (!childNode || !parentNode || parentNode.type === 'INSTANCE') {
        return;
    }

    if (childNode.type === 'TEXT_CONTAINER') {
        console.log('parentNode', parentNode);
        if (parentNode.type === 'TEXT') {
            setTextInstance(parentNode, childNode);
        }
    } else {
        api.appendToContainer(parentNode, childNode);
    }
};

const renderInstance = (type, node, props) => {
    const result = { tempId: nanoid(), type: type.toUpperCase() };
    const { children, ...otherProps } = props;
    if (props.ref) {
        props.ref.current = result;
    }
    if (props.innerRef) {
        props.innerRef.current = result
    }
    api.renderInstance(type, node, otherProps, result);
    return result;
};

export const render = async (jsx: any) => {
    const rootNode = await api.getInitialTree();
    const rootNodeWithParents = reparent(rootNode);
    const HostConfig = {
        now: Date.now,
        getRootHostContext: () => {
            return true;
        },
        prepareForCommit: () => { },
        resetAfterCommit: () => { },
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
        resetTextContent: () => { },
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
        insertInContainerBefore: () => { },
        removeChildFromContainer: () => { },
        prepareUpdate: () => {
            return true;
        },
        commitUpdate: (node, updatePayload, type, oldProps, newProps) => {
            return renderInstance(type, node, newProps);
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
            if (parentNode && parentNode.type === 'INSTANCE') {
                return;
            }
            console.log('removeChild', childNode);
            remove(childNode);
        },
        canHydrateInstance: (instance, type, props) => {
            console.log('canHydrateInstance', type, props);
            if (!checkInstanceMatchType(instance, type) || (instance.parent && instance.parent.type === 'INSTANCE')) {
                return null;
            }
            return instance;
        },
        hydrateInstance: (instance, type, props) => {
            console.log('hydrateInstance', type, props);
            return renderInstance(type, checkInstanceMatchType(instance, type) ? instance : null, props);
        },
        getFirstHydratableChild: parentInstance => {
            console.log('getFirstHydratableChild', parentInstance);
            return getFirstChild(parentInstance);
        },
        getNextHydratableSibling: instance => {
            console.log('getNextHydratableSibling', instance);
            return getNextChildren(instance);
        },
        didNotHydrateContainerInstance: () => { },
        didNotFindHydratableContainerInstance: () => { },
        didNotFindHydratableInstance: () => { },
        didNotFindHydratableTextInstance: () => { },
        didNotHydrateInstance: () => { },
        commitMount: (instance, type) => { },
        commitHydratedContainer: container => {
            /*container.children.forEach(child => {
                updateYogaRoot(child);
            });*/
        }
    };

    const reconciler = createReconciler(HostConfig);

    const container = reconciler.createContainer(rootNodeWithParents, true, true);
    reconciler.updateContainer(jsx, container);
};
