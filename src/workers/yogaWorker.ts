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

const transformToYogaNode = (yoga, cache, node, yogaParent, childId) => {
    const yogaNode = yoga.Node.create();
    cache.node = yogaNode;
    if (node.width && node.height && !node.children) {
        yogaNode.setWidth(node.width);
        yogaNode.setHeight(node.height);
    }
    if (node.style) {
        if (node.style.flexDirection) {
            yogaNode.setFlexDirection(transformFlexDirection(yoga)(node.style.flexDirection));
        }
        if (node.style.paddingTop) {
            yogaNode.setPadding(yoga.EDGE_TOP, node.style.paddingTop);
        }
        if (node.style.paddingBottom) {
            yogaNode.setPadding(yoga.EDGE_BOTTOM, node.style.paddingBottom);
        }
        if (node.style.paddingLeft) {
            yogaNode.setPadding(yoga.EDGE_LEFT, node.style.paddingLeft);
        }
        if (node.style.paddingRight) {
            yogaNode.setPadding(yoga.EDGE_RIGHT, node.style.paddingRight);
        }
        if (node.style.marginTop) {
            yogaNode.setMargin(yoga.EDGE_TOP, node.style.marginTop);
        }
        if (node.style.marginBottom) {
            yogaNode.setMargin(yoga.EDGE_BOTTOM, node.style.marginBottom);
        }
        if (node.style.marginLeft) {
            yogaNode.setMargin(yoga.EDGE_LEFT, node.style.marginLeft);
        }
        if (node.style.marginRight) {
            yogaNode.setMargin(yoga.EDGE_RIGHT, node.style.marginRight);
        }
        yogaNode.setAlignItems(yoga.ALIGN_FLEX_START);
        yogaNode.setJustifyContent(yoga.JUSTIFY_FLEX_START);
    }
    if (node.children) {
        node.children.forEach((child, id) => {
            const newCache = {};
            if (!cache.children) {
                cache.children = [];
            }
            cache.children.push(newCache);
            transformToYogaNode(yoga, newCache, child, yogaNode, id);
        });
    }
    if (yogaParent) {
        yogaParent.insertChild(yogaNode, childId);
    }
    return yogaNode;
};

const transformCache = cache => {
    const result = cache.node.getComputedLayout();
    if (!cache.children) {
        return result;
    }
    return {
        ...result,
        children: cache.children.map(transformCache)
    };
};

export const yogaWorker = yoga => message => {
    if (!message.value || message.value.type !== 'calculateLayout') {
        return;
    }

    const props = message.value.value;

    const cache = {};
    const yogaRoot = transformToYogaNode(yoga, cache, props, null, null);

    yogaRoot.calculateLayout(props.width, props.height, yoga.DIRECTION_LTR);

    parent.postMessage(
        {
            pluginMessage: {
                id: message.id,
                value: transformCache(cache)
            }
        },
        '*'
    );
};
