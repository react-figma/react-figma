/**
 * Calculates difference between given objects (typically props)
 * @return Array<string> props names where difference occurs
 */
import { RawTextInstance } from './CanvasManager';
import { map } from 'rxjs/operators';
import { isReactFigmaNode } from '../isReactFigmaNode';

export const shallowDiff = (oldObject: object, newObject: object): Array<string> => {
    const uniqueProps = new Set([...Object.keys(oldObject), ...Object.keys(newObject)]);
    return Array.from(uniqueProps).filter(propName => oldObject[propName] !== newObject[propName]);
};

/**
 * Creates object containing patch to transform oldProps into newProps
 */
export const propsDiff = (oldProps: object, newProps: object, updatePayload: Array<string>) => {
    const diff = {};
    let isDirty = false;

    updatePayload.forEach(propName => {
        if (propName === 'children') {
            return;
        }

        isDirty = true;
        diff[propName] = newProps[propName];
    });

    return [isDirty, diff];
};

export const patchTextNode = (childNode: RawTextInstance, parentNode: TextNode) => {
    childNode.parent = parentNode;
    parentNode.characters = childNode.value;
};

/**
 * Since groups rendering uses stub element to append its children
 * we need to remove it when it's no longer needed
 */
export const removeGroupStubElements = (parentNode: FrameNode) => {
    if (parentNode.type === 'GROUP') {
        parentNode.children.forEach(child => {
            if (child.getPluginData('reactFigmaGroupStubElement')) {
                child.remove();
            }
        });
    }
};

// Some type assertions required for reconciler
export const isBaseNode = (node: BaseNode | RawTextInstance): node is BaseNode => {
    return (<BaseNode>node).id !== undefined;
};

export const isTextNode = (node: BaseNode): node is TextNode => {
    return (<TextNode>node).type === 'TEXT';
};

export const isPageNode = (node: BaseNode): node is PageNode => {
    return (<PageNode>node).type === 'PAGE';
};

export const isGroupNode = (node: BaseNode): node is FrameNode => {
    return (<FrameNode>node).type === 'GROUP';
};

export const isImplementsChildrenMixin = (node: any): node is ChildrenMixin => {
    return (<ChildrenMixin>node).children !== undefined;
};

export class ReconcilerMethodNotImplemented extends Error {}

// Tree processing functions
export const mapTree = (node: BaseNode, callback: (node: BaseNode) => Object) => {
    if (!node || (node.type !== 'PAGE' && node.type !== 'DOCUMENT' && !isReactFigmaNode(node))) {
        return;
    }

    const result = {
        ...callback(node)
    };

    if (isImplementsChildrenMixin(node)) {
        result['children'] = node.children.map(child => mapTree(child, callback));
    }

    if (isPageNode(node)) {
        result['isCurrentPage'] = node.id === figma.currentPage.id;
    }

    return result;
};

export const linkTreeParents = (parent, node) => {
    if (!node) {
        return;
    }

    node.parent = parent;

    if (node.children) {
        node.children.forEach(child => linkTreeParents(node, child));
    }

    return node;
};

export const getMaxTagByTree = (node, initialTag = -1): number => {
    if (!node) {
        return initialTag;
    }

    const nodeTag = node.tag ? node.tag : initialTag;
    const childTags = node.children ? node.children.map(child => getMaxTagByTree(child, nodeTag)) : [];
    return Math.max(nodeTag, initialTag, ...childTags);
};

// TODO: probably, in future this file have to be split into separate ones
