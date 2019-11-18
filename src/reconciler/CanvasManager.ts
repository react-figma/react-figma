import { APIBridgeMessage } from './messages';

/**
 * Handles event messages in main realm and makes changes to the Figma document
 */
class CanvasManager {
    private instances: Map<number, BaseNode | SceneNode>;

    constructor() {
        this.instances = new Map<number, BaseNode | SceneNode>();
    }

    onMessage(message: APIBridgeMessage) {
        switch (message.type) {
        }
    }
}

export { CanvasManager };
