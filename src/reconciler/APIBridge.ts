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

    private sendMessage(type: string, options?: object) {
        parent.postMessage({ pluginMessage: { type, options } }, '*');
    }
}

export { APIBridge };
