import { APIBridgeMessageType } from './messages';
import { UIToPluginMessagePromise } from '..';
import { getMaxTagByTree, linkTreeParents } from './utils';

class APIBridgeComponent {
    readonly tag: number;

    constructor(tag: number) {
        this.tag = tag;
    }
}

type TBridgeFigmaTreeNode = {
    type: NodeType;
    tag: number;
    children: Array<TBridgeFigmaTreeNode>;
    parent?: TBridgeFigmaTreeNode;
};

/**
 * Implements interface for communication between the UI realm and the main realm.
 * Used by reconciler to make changes to Figma tree
 */

class APIBridge {
    // Used to avoid ambiguity when referencing to Figma nodes
    private currentTag = 0;

    // Used for hydration only and can be off-sync with actual tree most of the time
    private figmaTree: TBridgeFigmaTreeNode = null;

    allocateTag(): number {
        return ++this.currentTag;
    }

    // TODO: actually, I don't like naming of this method and
    //  guess we can do something with it later
    async fetchDocumentTree() {
        const { tree } = await UIToPluginMessagePromise({ type: 'fetchDocumentTree', test: '123' });
        this.figmaTree = linkTreeParents(null, tree);
        this.currentTag = getMaxTagByTree(this.figmaTree);
    }

    createInstance(type: string, props?: object): APIBridgeComponent {
        const tag = this.allocateTag();
        this.sendMessage('createInstance', { tag, type, props });
        return new APIBridgeComponent(tag);
    }

    createTextInstance(text: string): APIBridgeComponent {
        const tag = this.allocateTag();
        this.sendMessage('createTextInstance', { tag, text });
        return new APIBridgeComponent(tag);
    }

    appendChild(parent: APIBridgeComponent, child: APIBridgeComponent) {
        this.sendMessage('appendChild', { child: child.tag, parent: parent.tag });
    }

    commitUpdate(type: string, instance: APIBridgeComponent, update: object) {
        this.sendMessage('commitUpdate', { type, tag: instance.tag, props: update });
    }

    commitTextUpdate(textInstance: APIBridgeComponent, newText: string) {
        this.sendMessage('commitTextUpdate', { tag: textInstance.tag, text: newText });
    }

    removeChild(instance: APIBridgeComponent) {
        this.sendMessage('removeChild', { child: instance.tag });
    }

    insertBefore(parent: APIBridgeComponent, child: APIBridgeComponent, beforeChild: APIBridgeComponent) {
        this.sendMessage('insertBefore', { parent: parent.tag, child: child.tag, beforeChild: beforeChild.tag });
    }

    private sendMessage(type: APIBridgeMessageType, options?: object) {
        console.log('UI -> main:', type, options);
        parent.postMessage({ pluginMessage: { type, options } }, '*');
    }
}

export { APIBridge, APIBridgeComponent };
