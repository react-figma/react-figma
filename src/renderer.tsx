import * as nanoid from 'nanoid/non-secure';

import * as createReconciler from 'react-reconciler';

import { setTextChildren } from './hooks/useTextChildren';
import { api } from './rpc';
import { serializeProps } from './serializers';

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
        api.insertToContainer(parentNode, newChildNode, beforeChildNode);
    }
};

const remove = childNode => {
    api.remove(childNode);
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

const prepareToHydration = (node, parent) => {
    if (node.children && node.children.length >= 0) {
        node.firstHydratableChild = node.children[0];
        node.children.forEach(child => prepareToHydration(child, node));
    }
    if (parent) {
        const instanceIndex = parent.children.findIndex(child => child.id === node.id);
        node.nextHydratableSibling = parent.children.slice(instanceIndex + 1)[0];
    }
};

const appendToContainer = (parentNode, childNode) => {
    if (!childNode || !parentNode || parentNode.type === 'INSTANCE') {
        return;
    }

    if (childNode.type === 'TEXT_CONTAINER') {
        if (parentNode.type === 'TEXT') {
            setTextInstance(parentNode, childNode);
        }
    } else {
        api.appendToContainer(parentNode, childNode);
    }
};

const renderInstance = (type, node, props) => {
    const result = { reactId: (node && node.reactId) || nanoid(), type: type.toUpperCase() };
    const { children, ...otherProps } = props;
    if (props.ref) {
        props.ref.current = result;
    }
    if (props.innerRef) {
        props.innerRef.current = result;
        if (props.innerRefCallback) {
            props.innerRefCallback();
        }
    }
    api.renderInstance(type, node, serializeProps(otherProps), result);
    return result;
};

export const render = async (jsx: any) => {
    const rootNode = await api.getInitialTree();
    prepareToHydration(rootNode, undefined);

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
        },
        insertInContainerBefore: () => {},
        removeChildFromContainer: () => {},
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
            remove(childNode);
        },
        canHydrateInstance: (instance, type, props) => {
            if (!checkInstanceMatchType(instance, type) || (instance.parent && instance.parent.type === 'INSTANCE')) {
                return null;
            }
            return instance;
        },
        hydrateInstance: (instance, type, props) => {
            return renderInstance(type, checkInstanceMatchType(instance, type) ? instance : null, props);
        },
        getFirstHydratableChild: parentInstance => {
            return parentInstance.firstHydratableChild;
        },
        getNextHydratableSibling: instance => {
            return instance.nextHydratableSibling;
        },
        didNotHydrateContainerInstance: () => {},
        didNotFindHydratableContainerInstance: () => {},
        didNotFindHydratableInstance: () => {},
        didNotFindHydratableTextInstance: () => {},
        didNotHydrateInstance: () => {},
        commitMount: (instance, type) => {},
        commitHydratedContainer: container => {
            /*container.children.forEach(child => {
                updateYogaRoot(child);
            });*/
        }
    };

    const reconciler = createReconciler(HostConfig);

    reconciler.injectIntoDevTools({
        bundleType: 1, // 0 for PROD, 1 for DEV
        version: '0.1.4',
        rendererPackageName: 'react-figma'
    });

    const container = reconciler.createContainer(rootNode, true, true);
    reconciler.updateContainer(jsx, container);
};
