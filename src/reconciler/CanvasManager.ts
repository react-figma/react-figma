import * as renderers from '../renderers';
import { APIBridgeMessage } from './messages';
import {
    isBaseNode,
    isGroupNode,
    isImplementsChildrenMixin,
    isPageNode,
    isSceneNode,
    isTextNode,
    mapTree,
    patchTextNode,
    removeGroupStubElements
} from './utils';
import { respondToUIMessage } from '../helpers/messagePromise';
import { mapFigmaNodeToYogaTreeNode } from '../yoga/mapFigmaNodeToYogaTreeNode';

/**
 * Represents raw string entity that is stored inside actual TextNode
 */
export class RawTextInstance {
    value: string;
    parent: TextNode;
}

/**
 * Handles event messages in main realm and makes changes to the Figma document
 */
class CanvasManager {
    private instances: Map<number, BaseNode | RawTextInstance>;

    constructor() {
        this.instances = new Map<number, BaseNode | RawTextInstance>();
        this.instances.set(-1, figma.root);
    }

    onMessage(message: APIBridgeMessage) {
        console.log('-> Main', message);

        switch (message.type) {
            case 'createInstance':
                this.renderInstance(message.options);
                break;
            case 'createTextInstance':
                this.renderTextInstance(message.options);
                break;
            case 'appendChild':
                this.appendChild(message.options);
                break;
            case 'appendChildToRoot':
                this.appendChildToRoot(message.options);
                break;
            case 'commitUpdate':
                this.renderInstance(message.options);
                break;
            case 'commitTextUpdate':
                this.renderTextInstance(message.options);
                break;
            case 'removeChild':
                this.removeChild(message.options);
                break;
            case 'insertBefore':
                this.insertBefore(message.options);
                break;
            case 'insertInRootBefore':
                this.insertInRootBefore(message.options);
                break;
            case 'syncDocumentTree':
                this.sendDocumentTree(message);
                break;
            case 'sendYogaSubtree':
                this.sendYogaSubtree(message);
                break;
        }
    }

    private appendChild({ parent, child }) {
        const parentNode = this.instances.get(parent);
        const childNode = this.instances.get(child);

        if (!parentNode || !childNode || !isBaseNode(parentNode)) {
            return;
        }

        if (childNode instanceof RawTextInstance) {
            if (isBaseNode(parentNode) && isTextNode(parentNode)) {
                patchTextNode(childNode, parentNode);
            }
        } else if (isSceneNode(childNode)) {
            (parentNode as ChildrenMixin).appendChild(childNode);
        }

        if (isGroupNode(parentNode)) {
            removeGroupStubElements(parentNode);
        }
    }

    private appendChildToRoot({ child }) {
        this.appendChild({ child, parent: -1 });
    }

    private removeChild({ child }) {
        const childNode = this.instances.get(child) as BaseNode;

        if (!childNode || childNode.removed) {
            return;
        }

        childNode.remove();
        this.instances.delete(child);
    }

    private insertBefore({ parent, child, beforeChild }) {
        const parentNode = this.instances.get(parent);
        const childNode = this.instances.get(child);
        const beforeChildNode = this.instances.get(beforeChild) as BaseNode;

        if (!parentNode || !childNode || !childNode || !isBaseNode(parentNode)) {
            return;
        }

        if (childNode instanceof RawTextInstance) {
            if (isBaseNode(parentNode) && isTextNode(parentNode)) {
                patchTextNode(childNode, parentNode);
            }
        } else if (isImplementsChildrenMixin(parentNode) && isSceneNode(beforeChildNode) && isSceneNode(childNode)) {
            const beforeChildIndex = parentNode.children.indexOf(beforeChildNode);
            (parentNode as ChildrenMixin).insertChild(beforeChildIndex, childNode);
        }

        if (isGroupNode(parentNode)) {
            removeGroupStubElements(parentNode);
        }
    }

    private insertInRootBefore({ child, beforeChild }) {
        this.insertBefore({ parent: -1, child, beforeChild });
    }

    private renderInstance({ tag, type, props }) {
        const instance = this.instances.get(tag) || null;

        const figmaNode = renderers[type](instance)(props);

        if (!instance) {
            figmaNode.setPluginData('reactFigmaNode', 'true');
            figmaNode.setPluginData('reactFigmaTag', String(tag));
        }

        if (isPageNode(figmaNode) && props.isCurrent) {
            figma.currentPage = figmaNode;
        }

        this.instances.set(tag, figmaNode);
    }

    private renderTextInstance({ tag, text }) {
        const instance = (this.instances.get(tag) as RawTextInstance) || new RawTextInstance();

        instance.value = text;

        if (instance.parent) {
            instance.parent.characters = text;
        }

        this.instances.set(tag, instance);
    }

    private sendDocumentTree(message) {
        let tree = mapTree(figma.root, node => {
            const tag = parseInt(node.getPluginData('reactFigmaTag'), 10);

            if (tag) {
                this.instances.set(tag, node);
            }

            return {
                type: node.type.toLowerCase(),
                tag
            };
        });

        // Remove pages that have no figma nodes
        if (tree.children) {
            tree.children = tree.children.filter(
                child => !isNaN(child.tag) || (child.children && child.children.length > 0)
            );
        }
        respondToUIMessage(message, { tree });
    }

    private sendYogaSubtree(message) {
        const root = this.instances.get(message.tag) as BaseNode;
        let tree = mapTree(root, mapFigmaNodeToYogaTreeNode);
        respondToUIMessage(message, { tree });
    }
}

export { CanvasManager };
