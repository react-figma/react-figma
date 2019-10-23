import * as React from 'react';
import * as renderers from './renderers';
// todo replace with webpack aliasing, install @types/react-reconciler
import * as createReconciler from './realm-adopted/react-reconciler';

const isReactFigmaNode = child => child.getPluginData && child.getPluginData('isReactFigmaNode');

export const render = async (jsx: any, rootNode) => {
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

            if (childNode.type === 'PRE_GROUP') {
                try {
                    childNode.children.forEach(el => {
                        parentNode.appendChild(el);
                    });
                    childNode.groupNode = figma.group(childNode.children, parentNode);
                    childNode.didMount();
                } catch (e) {
                    console.log('Group error:', e, childNode.children, parentNode);
                }
            } else {
                parentNode.appendChild(childNode);
            }
        },
        appendChild: (parentNode, childNode) => {
            console.log('appendChild', parentNode, childNode);

            if (childNode.type === 'PRE_GROUP') {
                throw 'Hydration on groups is not supported';
            } else {
                parentNode.appendChild(childNode);
            }
        },
        insertBefore: (parentNode, newChildNode, beforeChildNode) => {
            console.log('insertBefore', parentNode, newChildNode, beforeChildNode);
        },
        finalizeInitialChildren: (element, type, ...args) => {
            console.log('finalizeInitialChildren', ...args);
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
            if (!isReactFigmaNode(instance)) {
                return;
            }
            if (instance.type.toLowerCase() !== type) {
                instance.remove();
                return;
            } else {
                return instance;
            }
        },
        hydrateInstance: (instance, type, props) => {
            console.log('hydrateInstance', instance, type, props);
            const result = renderers[type](instance)(props);
            //$forUpdates.next({instance: result, type, props});
            return result;
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
        commitMount: (instance, type, newProps, internalInstanceHandle) => {
            console.log('commitMount', instance, type, newProps, internalInstanceHandle);
        }
    };

    const reconciler = createReconciler(HostConfig);

    const container = reconciler.createContainer(rootNode, true, true);
    reconciler.updateContainer(jsx, container);
};
