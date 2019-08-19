import * as yoga from 'yoga-layout';

onmessage = (event) => {
    console.log("got this from the plugin code", event.data.pluginMessage);
    const message = event.data.pluginMessage;

    if (message.type !== "calculateLayout") {
        return;
    }

    const props = message.value;

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
        const yogaNodes = props.children.map((child: any, id) => {
            const yogaNode = yoga.Node.create();
            if (child.width && child.height) {
                yogaNode.setWidth(child.width);
                yogaNode.setHeight(child.height);
            }
            yogaRoot.insertChild(yogaNode, id);
            return yogaNode;
        });

        yogaRoot.calculateLayout(props.width, props.height, yoga.DIRECTION_LTR);

        props.children.forEach((child: any, id) => {
            const yogaNode = yogaNodes[id];
            const layoutProps = yogaNode.getComputedLayout();
            recalculatedChildren.push(layoutProps);
        });
    }

    parent.postMessage({ pluginMessage: { type: 'calculateLayoutResult', value: {
        children: recalculatedChildren
    }}}, '*')
}
