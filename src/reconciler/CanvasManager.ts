import * as renderers from '../renderers';
import { APIBridgeMessage } from './messages';

/**
 * Handles event messages in main realm and makes changes to the Figma document
 */
class CanvasManager {
    private instances: Map<number, BaseNode>;

    constructor() {
        this.instances = new Map<number, BaseNode>();
    }

    onMessage(message: APIBridgeMessage) {
        console.log('-> Main', message);

        switch (message.type) {
            case 'createInstance':
                this.renderInstance(message.options);
                break;
            case 'appendChild':
                this.appendChild(message.options);
                break;
            case 'commitUpdate':
                this.renderInstance(message.options);
                break;
            case 'removeChild':
                this.removeChild(message.options);
                break;
            case 'insertBefore':
                this.insertBefore(message.options);
                break;
        }
    }

    private appendChild({ parent, child }) {
        const parentNode = this.instances.get(parent) as ChildrenMixin;
        const childNode = this.instances.get(child);

        if (!parentNode || !childNode) {
            return;
        }

        // TODO: text support
        // TODO: remove group stub element

        parentNode.appendChild(childNode);
    }

    private removeChild({ child }) {
        const childNode = this.instances.get(child);

        if (!childNode || childNode.removed) {
            return;
        }

        childNode.remove();
        this.instances.delete(child);
    }

    private insertBefore({ parent, child, beforeChild }) {
        const parentNode = this.instances.get(parent) as ChildrenMixin;
        const childNode = this.instances.get(child);
        const beforeChildNode = this.instances.get(beforeChild);

        if (!parentNode || !childNode || !childNode) {
            return;
        }

        // TODO: text support
        // TODO: remove group stub element

        const beforeChildIndex = parentNode.children.indexOf(beforeChildNode);
        parentNode.insertChild(beforeChildIndex, childNode);
    }

    private renderInstance({ tag, type, props }) {
        const instance = this.instances.get(tag) || null;

        const figmaNode = renderers[type](instance)(props);

        if (!instance) {
            figmaNode.setPluginData('reactFigmaNode', 'true');
            figmaNode.setPluginData('reactFigmaTag', String(tag));
        }

        this.instances.set(tag, figmaNode);
    }
}

export { CanvasManager };
