import { transformDimensionMapper } from '../styleTransformers/transformDimension';
import { YogaStyleProperties } from './YogaStyleProperties';

const transformFlexDirection = (yoga) => (value: string) => {
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

const transformAlignItems = (yoga) => (value: YogaStyleProperties['alignItems']) => {
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

const transformFlexWrap = (yoga) => (value: YogaStyleProperties['flexWrap']) => {
    switch (value) {
        case 'wrap':
            return yoga.WRAP_WRAP;
        case 'nowrap':
            return yoga.WRAP_NO_WRAP;
        default:
            return yoga.WRAP_NO_WRAP;
    }
};

const transformAlignSelf = (yoga) => (value: YogaStyleProperties['alignSelf']) => {
    switch (value) {
        case 'auto':
            return yoga.ALIGN_AUTO;
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

const transformJustifyContent = (yoga) => (value: string) => {
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

const transformPosition = (yoga) => (value: string) => {
    switch (value) {
        case 'absolute':
            return yoga.POSITION_TYPE_ABSOLUTE;
        default:
            return yoga.POSITION_TYPE_RELATIVE;
    }
};

const transformOverflow = (yoga) => (value: string) => {
    switch (value) {
        case 'hidden':
            return yoga.OVERFLOW_HIDDEN;
        case 'scroll':
            return yoga.OVERFLOW_SCROLL;
        default:
            return yoga.OVERFLOW_VISIBLE;
    }
};

export const applyStyleToYogaNode = (yoga) => (yogaNode, style: Partial<YogaStyleProperties>) => {
    if (style.position) {
        yogaNode.setPositionType(transformPosition(yoga)(style.position));
    }
    if (style.top) {
        transformDimensionMapper(style.top)
            .px((value) => yogaNode.setPosition(yoga.EDGE_TOP, value))
            .percentage((value) => yogaNode.setPositionPercent(yoga.EDGE_TOP, value));
    }
    if (style.left) {
        transformDimensionMapper(style.left)
            .px((value) => yogaNode.setPosition(yoga.EDGE_LEFT, value))
            .percentage((value) => yogaNode.setPositionPercent(yoga.EDGE_LEFT, value));
    }
    if (style.right) {
        transformDimensionMapper(style.right)
            .px((value) => yogaNode.setPosition(yoga.EDGE_RIGHT, value))
            .percentage((value) => yogaNode.setPositionPercent(yoga.EDGE_RIGHT, value));
    }
    if (style.bottom) {
        transformDimensionMapper(style.bottom)
            .px((value) => yogaNode.setPosition(yoga.EDGE_BOTTOM, value))
            .percentage((value) => yogaNode.setPositionPercent(yoga.EDGE_BOTTOM, value));
    }
    if (style.width) {
        transformDimensionMapper(style.width)
            .px(yogaNode.setWidth.bind(yogaNode))
            .percentage(yogaNode.setWidthPercent.bind(yogaNode));
    }
    if (style.height) {
        transformDimensionMapper(style.height)
            .px(yogaNode.setHeight.bind(yogaNode))
            .percentage(yogaNode.setHeightPercent.bind(yogaNode));
    }
    if (style.minWidth) {
        transformDimensionMapper(style.minWidth)
            .px(yogaNode.setMinWidth.bind(yogaNode))
            .percentage(yogaNode.setMinWidthPercent.bind(yogaNode));
    }
    if (style.maxWidth) {
        transformDimensionMapper(style.maxWidth)
            .px(yogaNode.setMaxWidth.bind(yogaNode))
            .percentage(yogaNode.setMaxWidth.bind(yogaNode));
    }
    if (style.minHeight) {
        transformDimensionMapper(style.minHeight)
            .px(yogaNode.setMinHeight.bind(yogaNode))
            .percentage(yogaNode.setMinHeightPercent.bind(yogaNode));
    }
    if (style.maxHeight) {
        transformDimensionMapper(style.maxHeight)
            .px(yogaNode.setMaxHeight.bind(yogaNode))
            .percentage(yogaNode.setMaxHeight.bind(yogaNode));
    }
    if (style.flexDirection) {
        yogaNode.setFlexDirection(transformFlexDirection(yoga)(style.flexDirection));
    }
    if (style.padding) {
        transformDimensionMapper(style.padding)
            .px((value) => yogaNode.setPadding(yoga.EDGE_ALL, value))
            .percentage((value) => yogaNode.setPaddingPercent(yoga.EDGE_ALL, value));
    }
    if (style.paddingTop) {
        transformDimensionMapper(style.paddingTop)
            .px((value) => yogaNode.setPadding(yoga.EDGE_TOP, value))
            .percentage((value) => yogaNode.setPaddingPercent(yoga.EDGE_TOP, value));
    }
    if (style.paddingBottom) {
        transformDimensionMapper(style.paddingBottom)
            .px((value) => yogaNode.setPadding(yoga.EDGE_BOTTOM, value))
            .percentage((value) => yogaNode.setPaddingPercent(yoga.EDGE_BOTTOM, value));
    }
    if (style.paddingLeft) {
        transformDimensionMapper(style.paddingLeft)
            .px((value) => yogaNode.setPadding(yoga.EDGE_LEFT, value))
            .percentage((value) => yogaNode.setPaddingPercent(yoga.EDGE_LEFT, value));
    }
    if (style.paddingRight) {
        transformDimensionMapper(style.paddingRight)
            .px((value) => yogaNode.setPadding(yoga.EDGE_RIGHT, value))
            .percentage((value) => yogaNode.setPaddingPercent(yoga.EDGE_RIGHT, value));
    }
    if (style.paddingVertical) {
        transformDimensionMapper(style.paddingVertical)
            .px((value) => yogaNode.setPadding(yoga.EDGE_VERTICAL, value))
            .percentage((value) => yogaNode.setPaddingPercent(yoga.EDGE_VERTICAL, value));
    }
    if (style.paddingHorizontal) {
        transformDimensionMapper(style.paddingHorizontal)
            .px((value) => yogaNode.setPadding(yoga.EDGE_HORIZONTAL, value))
            .percentage((value) => yogaNode.setPaddingPercent(yoga.EDGE_HORIZONTAL, value));
    }
    if (style.margin) {
        transformDimensionMapper(style.margin)
            .px((value) => yogaNode.setMargin(yoga.EDGE_ALL, value))
            .percentage((value) => yogaNode.setMarginPercent(yoga.EDGE_ALL, value));
    }
    if (style.marginTop) {
        transformDimensionMapper(style.marginTop)
            .px((value) => yogaNode.setMargin(yoga.EDGE_TOP, value))
            .percentage((value) => yogaNode.setMarginPercent(yoga.EDGE_TOP, value));
    }
    if (style.marginBottom) {
        transformDimensionMapper(style.marginBottom)
            .px((value) => yogaNode.setMargin(yoga.EDGE_BOTTOM, value))
            .percentage((value) => yogaNode.setMarginPercent(yoga.EDGE_BOTTOM, value));
    }
    if (style.marginLeft) {
        transformDimensionMapper(style.marginLeft)
            .px((value) => yogaNode.setMargin(yoga.EDGE_LEFT, value))
            .percentage((value) => yogaNode.setMarginPercent(yoga.EDGE_LEFT, value));
    }
    if (style.marginRight) {
        transformDimensionMapper(style.marginRight)
            .px((value) => yogaNode.setMargin(yoga.EDGE_RIGHT, value))
            .percentage((value) => yogaNode.setMarginPercent(yoga.EDGE_RIGHT, value));
    }
    if (style.marginVertical) {
        transformDimensionMapper(style.marginVertical)
            .px((value) => yogaNode.setMargin(yoga.EDGE_VERTICAL, value))
            .percentage((value) => yogaNode.setMarginPercent(yoga.EDGE_VERTICAL, value));
    }
    if (style.marginHorizontal) {
        transformDimensionMapper(style.marginHorizontal)
            .px((value) => yogaNode.setMargin(yoga.EDGE_HORIZONTAL, value))
            .percentage((value) => yogaNode.setMarginPercent(yoga.EDGE_HORIZONTAL, value));
    }
    if (style.borderWidth) {
        yogaNode.setBorder(yoga.EDGE_ALL, style.borderWidth);
    }
    if (style.flex) {
        yogaNode.setFlex(style.flex);
    }
    if (style.flexGrow) {
        yogaNode.setFlexGrow(style.flexGrow);
    }
    if (style.flexShrink) {
        yogaNode.setFlexShrink(style.flexShrink);
    }
    if (style.flexBasis) {
        transformDimensionMapper(style.flexBasis)
            .px(yogaNode.setFlexBasis.bind(yogaNode))
            .percentage(yogaNode.setFlexBasisPercent.bind(yogaNode));
    }
    if (style.flexWrap) {
        yogaNode.setFlexWrap(transformFlexWrap(yoga)(style.flexWrap));
    }
    if (style.aspectRatio) {
        yogaNode.setAspectRatio(style.aspectRatio);
    }
    if (style.alignSelf) {
        yogaNode.setAlignSelf(transformAlignSelf(yoga)(style.alignSelf));
    }
    yogaNode.setAlignItems(transformAlignItems(yoga)(style.alignItems));
    yogaNode.setJustifyContent(transformJustifyContent(yoga)(style.justifyContent));

    yogaNode.setOverflow(transformOverflow(yoga)(style.overflow));
};
