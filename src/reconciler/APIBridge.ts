import { APIBridgeMessageType } from './messages';

class APIBridgeComponent {
    readonly tag: number;

    constructor(tag: number) {
        this.tag = tag;
    }
}

/**
 * Implements interface for communication between the UI realm and the main realm.
 * Used by reconciler to make changes to Figma tree
 */

class APIBridge {
    // Used to avoid ambiguity when referencing to Figma nodes
    private currentTag = 0;

    allocateTag(): number {
        return ++this.currentTag;
    }

    createInstance(type: string, props?: object): APIBridgeComponent {
        const tag = this.allocateTag();
        this.sendMessage('createInstance', { tag, type, props });
        return new APIBridgeComponent(tag);
    }

    appendChild(parent: APIBridgeComponent, child: APIBridgeComponent) {
        this.sendMessage('appendChild', { child: child.tag, parent: parent.tag });
    }

    commitUpdate(type: string, instance: APIBridgeComponent, update: object) {
        this.sendMessage('commitUpdate', { type, tag: instance.tag, props: update });
    }

    removeChild(instance: APIBridgeComponent) {
        this.sendMessage('removeChild', { child: instance.tag });
    }

    private sendMessage(type: APIBridgeMessageType, options?: object) {
        console.log('UI -> main:', type, options);
        parent.postMessage({ pluginMessage: { type, options } }, '*');
    }
}

export { APIBridge, APIBridgeComponent };
