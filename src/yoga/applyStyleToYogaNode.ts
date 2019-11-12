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

const transformAlignItems = yoga => (value: string) => {
    switch (value) {
        case 'flex-end':
            return yoga.ALIGN_FLEX_END;
        case 'center':
            return yoga.ALIGN_CENTER;
        case 'stretch':
            return yoga.ALIGN_STRETCH;
        default:
            return yoga.ALIGN_FLEX_START;
    }
};

const transformJustifyContent = yoga => (value: string) => {
    switch (value) {
        case 'flex-end':
            return yoga.JUSTIFY_FLEX_END;
        case 'center':
            return yoga.JUSTIFY_CENTER;
        case 'space-between':
            return yoga.JUSTIFY_SPACE_BETWEEN;
        case 'space-around':
            return yoga.JUSTIFY_SPACE_AROUND;
        default:
            return yoga.JUSTIFY_FLEX_START;
    }
};

export const applyStyleToYogaNode = yoga => (yogaNode, style) => {
    if (style.width) {
        yogaNode.setWidth(style.width);
    }
    if (style.height) {
        yogaNode.setHeight(style.height);
    }
    if (style.minHeight) {
        yogaNode.setMinHeight(style.minHeight);
    }
    if (style.flexDirection) {
        yogaNode.setFlexDirection(transformFlexDirection(yoga)(style.flexDirection));
    }
    if (style.paddingTop) {
        yogaNode.setPadding(yoga.EDGE_TOP, style.paddingTop);
    }
    if (style.paddingBottom) {
        yogaNode.setPadding(yoga.EDGE_BOTTOM, style.paddingBottom);
    }
    if (style.paddingLeft) {
        yogaNode.setPadding(yoga.EDGE_LEFT, style.paddingLeft);
    }
    if (style.paddingRight) {
        yogaNode.setPadding(yoga.EDGE_RIGHT, style.paddingRight);
    }
    if (style.marginTop) {
        yogaNode.setMargin(yoga.EDGE_TOP, style.marginTop);
    }
    if (style.marginBottom) {
        yogaNode.setMargin(yoga.EDGE_BOTTOM, style.marginBottom);
    }
    if (style.marginLeft) {
        yogaNode.setMargin(yoga.EDGE_LEFT, style.marginLeft);
    }
    if (style.marginRight) {
        yogaNode.setMargin(yoga.EDGE_RIGHT, style.marginRight);
    }
    yogaNode.setAlignItems(transformAlignItems(yoga)(style.alignItems));
    yogaNode.setJustifyContent(transformJustifyContent(yoga)(style.justifyContent));
};
