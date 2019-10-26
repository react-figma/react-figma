export const PREGROUP_NODE_TYPE = 'PREGROUP';

/*
 Fake tree node that represents intention to group some elements
 Implements some methods that make fake node behave like the real one
 */
export class PregroupNode {
    readonly type = PREGROUP_NODE_TYPE;
    figmaNode: FrameNode = null;
    children: BaseNode[] = [];

    // Index where group have to be placed in children list
    order: number = 0;

    // Temporarily holds plugin data until the real figma node is created
    private scheduledPluginData: Map<string, string> = new Map<string, string>();
    private readonly didMountHandler: () => void;

    constructor(didMountHandler: () => void) {
        this.didMountHandler = didMountHandler;
    }

    static createFromGroupNode(group: FrameNode, didMountHandler: () => void): PregroupNode {
        if (group.type !== 'GROUP') {
            return null;
        }

        let pregroupNode = new PregroupNode(didMountHandler);
        pregroupNode.figmaNode = group;

        return pregroupNode;
    }

    remove() {
        this.figmaNode.remove();
    }

    appendChild(childNode: BaseNode) {
        this.children.push(childNode);
    }

    getPluginData(key: string): string {
        return (this.figmaNode && this.figmaNode.getPluginData(key)) || this.scheduledPluginData[key];
    }

    setPluginData(key: string, value: string): void {
        if (this.figmaNode) {
            this.figmaNode.setPluginData(key, value);
        } else {
            this.scheduledPluginData.set(key, value);
        }
    }

    didMount() {
        this.didMountHandler();

        this.scheduledPluginData.forEach((value, key) => this.figmaNode.setPluginData(key, value));
        this.scheduledPluginData.clear();
    }
}
