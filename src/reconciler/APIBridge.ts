import { APIBridgeMessageType } from './messages';
import { UIToPluginMessagePromise } from '..';
import { getMaxTagByTree, buildBridgeComponentsTree } from './utils';
import { APIBridgeComponent } from './APIBridgeComponent';

/**
 * Implements interface for communication between the UI realm and the main realm.
 * Used by reconciler to make changes to Figma tree
 */

class APIBridge {
    // Used to avoid ambiguity when referencing to Figma nodes
    private currentTag = 0;

    // Stores actual structure of document, used primarily for hydration
    tree: APIBridgeComponent;

    constructor() {
        this.tree = new APIBridgeComponent(NaN, 'document');
    }

    allocateTag(): number {
        return ++this.currentTag;
    }

    async syncDocumentTree() {
        const { tree } = await UIToPluginMessagePromise({ type: 'syncDocumentTree' });
        this.tree = buildBridgeComponentsTree(null, tree);
        this.currentTag = getMaxTagByTree(this.tree);
    }

    createInstance(type: string, props?: object): APIBridgeComponent {
        const tag = this.allocateTag();
        this.sendMessage('createInstance', { tag, type, props });
        return new APIBridgeComponent(tag, type);
    }

    createTextInstance(text: string): APIBridgeComponent {
        const tag = this.allocateTag();
        this.sendMessage('createTextInstance', { tag, text });
        return new APIBridgeComponent(tag, 'raw_text');
    }

    appendChild(parent: APIBridgeComponent, child: APIBridgeComponent) {
        this.sendMessage('appendChild', { child: child.tag, parent: parent.tag });
        parent.appendChild(child);
    }

    appendChildToRoot(child: APIBridgeComponent) {
        this.sendMessage('appendChildToRoot', { child: child.tag });
        this.tree.appendChild(child);
    }

    commitUpdate(type: string, instance: APIBridgeComponent, update: object) {
        this.sendMessage('commitUpdate', { type, tag: instance.tag, props: update });
    }

    commitTextUpdate(textInstance: APIBridgeComponent, newText: string) {
        this.sendMessage('commitTextUpdate', { tag: textInstance.tag, text: newText });
    }

    removeChild(parent: APIBridgeComponent, child: APIBridgeComponent) {
        this.sendMessage('removeChild', { child: child.tag });

        if (parent) {
            parent.removeChild(child);
        } else {
            this.tree.removeChild(child);
        }
    }

    insertBefore(parent: APIBridgeComponent, child: APIBridgeComponent, beforeChild: APIBridgeComponent) {
        this.sendMessage('insertBefore', { parent: parent.tag, child: child.tag, beforeChild: beforeChild.tag });
        parent.insertChildBefore(child, beforeChild);
    }

    insertInRootBefore(child: APIBridgeComponent, beforeChild: APIBridgeComponent) {
        this.sendMessage('insertInRootBefore', { child: child.tag, beforeChild: beforeChild.tag });
        this.tree.insertChildBefore(child, beforeChild);
    }

    private sendMessage(type: APIBridgeMessageType, options?: object) {
        console.log('UI -> main:', type, options);
        parent.postMessage({ pluginMessage: { type, options } }, '*');
    }
}

export { APIBridge, APIBridgeComponent };
