import * as React from 'react';
import {
    DefaultShapeProps,
    VectorNodeProps,
    CornerProps,
    StyleOf,
    InstanceItemProps,
    SelectionEventProps
} from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import {
    transformGeometryStyleProperties,
    GeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';
import { useImageHash } from '../../hooks/useImageHash';
import { useNodeIdCallback } from '../../hooks/useNodeIdCallback';

export interface VectorProps
    extends VectorNodeProps,
        DefaultShapeProps,
        CornerProps,
        InstanceItemProps,
        SelectionEventProps,
        OnLayoutHandlerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties & GeometryStyleProperties>;
    children?: undefined;
}

const Vector: React.FC<VectorProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);
    useNodeIdCallback(nodeRef, props.onNodeId);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const imageHash = useImageHash(style.backgroundImage);

    const vectorProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('fills', style, imageHash),
        ...props,
        style
    };
    const yogaProps = useYogaLayout({ nodeRef, ...vectorProps });
    useOnLayoutHandler(yogaProps, props);
    return <vector {...vectorProps} {...yogaProps} innerRef={nodeRef} />;
};

export { Vector };
