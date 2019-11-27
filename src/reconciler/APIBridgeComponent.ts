class APIBridgeComponent {
    readonly tag: number;
    readonly type: string;
    parent?: APIBridgeComponent = null;
    children: Array<APIBridgeComponent> = new Array<APIBridgeComponent>();

    constructor(tag: number, type: string) {
        this.tag = tag;
        this.type = type;
    }

    appendChild(child: APIBridgeComponent) {
        child.parent = this;
        this.children.push(child);
    }

    removeChild(child: APIBridgeComponent) {
        child.parent = null;
        this.children = this.children.filter(element => element !== child);
    }

    insertChildBefore(child: APIBridgeComponent, beforeChild: APIBridgeComponent) {
        child.parent = this;
        const beforeIndex = this.children.indexOf(beforeChild);
        this.children.splice(beforeIndex, 0, child);
    }
}

export { APIBridgeComponent };
