import { createPluginAPI, createUIAPI } from "figma-jsonrpc";
import {isReactFigmaNode} from "./isReactFigmaNode";
import * as renderers from "./renderers";
import {setTextChildren} from "./hooks/useTextChildren";

const getInitialTree = (node) => {
    const children = node.children && node.children
        .filter((item) => isReactFigmaNode(item))
        .map((item) => getInitialTree(item));
    const result =  {
        id: node.id,
        type: node.type,
        children: undefined
    }
    if (children && children.length > 0) {
        result.children = children.map((item) => ({...item, parent: result}));
    }
    return result;
}

const renderInstance = (type, node, props) => {
    const instance = renderers[type](node)(props);
    if (!node) {
        instance.setPluginData('isReactFigmaNode', 'true');
    }
    return instance;
}

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
    if (!childNode || !parentNode || parentNode.type === 'INSTANCE') {
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
    if (!childNode || childNode.removed) {
        return;
    }
    childNode.remove();
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

const cache = {};

const transformToNode = (smth) => {
    if (!smth) {
        return;
    }
    if (smth.id) {
        return figma.getNodeById(smth.id);
    } else if (smth.tempId) {
        return cache[smth.tempId];
    } else {
        return smth;
    }
}

// those methods will be executed in the Figma plugin,
// regardless of where they are called from
export const api = createPluginAPI({
    getInitialTree() {
        return getInitialTree(figma.root)
    },

    renderInstance(type, _node, props, tempNode) {
        const node = transformToNode(_node);
        const instance = renderInstance(type, node, props);
        cache[tempNode.tempId] = instance;
    },

    appendToContainer(_parentNode, _childNode) {
        const parentNode = transformToNode(_parentNode);
        const childNode = transformToNode(_childNode);
        appendToContainer(parentNode, childNode);
    }

});

// those methods will be executed in the Figma UI,
// regardless of where they are called from
export const uiApi = createUIAPI({

});
