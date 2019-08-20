const transformFlexDirection = yoga => (value: string) => {
    switch (value) {
        case 'row':
            return yoga.FLEX_DIRECTION_ROW;
        case 'row-reverse':
            return yoga.FLEX_DIRECTION_ROW_REVERSE;
        case 'column-reverse':
            return yoga.FLEX_DIRECTION_COLUMN_REVERSE;
        default:
            return yoga.FLEX_DIRECTION_COLUMN;
    }
};

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
    if (props.style) {
        const style = props.style;
        if (style.flexDirection) {
            yogaRoot.setFlexDirection(transformFlexDirection(yoga)(style.flexDirection));
        }
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
            if (child.style) {
                if (child.style.marginTop) {
                    yogaNode.setMargin(yoga.EDGE_TOP, child.style.marginTop);
                }
                if (child.style.marginBottom) {
                    yogaNode.setMargin(yoga.EDGE_BOTTOM, child.style.marginBottom);
                }
                if (child.style.marginLeft) {
                    yogaNode.setMargin(yoga.EDGE_LEFT, child.style.marginLeft);
                }
                if (child.style.marginRight) {
                    yogaNode.setMargin(yoga.EDGE_RIGHT, child.style.marginRight);
                }
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

    const rootComputed = yogaRoot.getComputedLayout();

    parent.postMessage(
        {
            pluginMessage: {
                id: message.id,
                value: {
                    width: rootComputed.width,
                    height: rootComputed.height,
                    children: recalculatedChildren
                }
            }
        },
        '*'
    );
};
