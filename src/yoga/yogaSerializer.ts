import * as yoga from 'yoga-layout-prebuilt';

const yogaEdge = {
    left: yoga.EDGE_LEFT,
    top: yoga.EDGE_TOP,
    right: yoga.EDGE_RIGHT,
    bottom: yoga.EDGE_BOTTOM,
    start: yoga.EDGE_START,
    end: yoga.EDGE_END,
    horizontal: yoga.EDGE_HORIZONTAL,
    vertical: yoga.EDGE_VERTICAL,
    all: yoga.EDGE_ALL
};

const config = {
    alignContent: 'getAlignContent',
    alignItems: 'getAlignItems',
    alignSelf: 'getAlignSelf',
    aspectRatio: 'getAspectRatio',
    border: ['getBorder', yogaEdge],
    display: 'getDisplay',
    flexBasis: 'getFlexBasis',
    flexDirection: 'getFlexDirection',
    flexGrow: 'getFlexGrow',
    flexShrink: 'getFlexShrink',
    flexWrap: 'getFlexWrap',
    height: 'getHeight',
    justifyContent: 'getJustifyContent',
    margin: ['getMargin', yogaEdge],
    maxHeight: 'getMaxHeight',
    maxWidth: 'getMaxWidth',
    minHeight: 'getMinHeight',
    minWidth: 'getMinWidth',
    overflow: 'getOverflow',
    padding: ['getPadding', yogaEdge],
    position: ['getPosition', yogaEdge],
    positionType: 'getPositionType',
    width: 'getWidth'
};

export const serializeYogaNodeStyle = yogaNode => {
    const result = {};
    Object.keys(config).forEach(prop => {
        const getter = config[prop];
        if (typeof getter === 'string') {
            result[prop] = yogaNode[getter]();
        } else {
            const f = getter[0];
            const args = getter[1];
            result[prop] = {};
            Object.keys(args).forEach(argKey => {
                result[prop][argKey] = yogaNode[f](args[argKey]);
            });
        }
    });
    return result;
};
