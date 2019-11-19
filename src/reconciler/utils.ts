/**
 * Calculates difference between given objects (typically props)
 * @return Array<string> props names where difference occurs
 */
import { RawTextInstance } from './CanvasManager';

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

// Some type assertions required for reconciler
export const isBaseNode = (node: BaseNode | RawTextInstance): node is BaseNode => {
    return (<BaseNode>node).id !== undefined;
};

export const isTextNode = (node: BaseNode): node is TextNode => {
    return (<TextNode>node).type === 'TEXT';
};

export const isImplementsChildrenMixin = (node: any): node is ChildrenMixin => {
    return (<ChildrenMixin>node).children !== undefined;
};

export class ReconcilerMethodNotImplemented extends Error {}
