export const yogaWorker = yoga => message => {
    if (!message.value || message.value.type !== 'calculateLayout') {
        return;
    }
    const props = message.value.value;
    const yogaRoot = yoga.Node.create();
    if (props.width) {
        yogaRoot.setWidth(props.width);
    }
    if (props.height) {
        yogaRoot.setHeight(props.height);
    }
    yogaRoot.setJustifyContent(yoga.JUSTIFY_CENTER);
    const recalculatedChildren = [];
    if (props.children) {
        const yogaNodes = props.children.map((child, id) => {
            const yogaNode = yoga.Node.create();
            if (child.width && child.height) {
                yogaNode.setWidth(child.width);
                yogaNode.setHeight(child.height);
            }
            yogaRoot.insertChild(yogaNode, id);
            return yogaNode;
        });
        yogaRoot.calculateLayout(props.width, props.height, yoga.DIRECTION_LTR);
        props.children.forEach((child, id) => {
            const yogaNode = yogaNodes[id];
            const layoutProps = yogaNode.getComputedLayout();
            recalculatedChildren.push(layoutProps);
        });
    }
    parent.postMessage(
        {
            pluginMessage: {
                id: message.id,
                value: {
                    children: recalculatedChildren
                }
            }
        },
        '*'
    );
};
