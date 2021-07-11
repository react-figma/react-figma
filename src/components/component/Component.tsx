import * as React from 'react';
import {
    AutoLayoutProps,
    BorderProps,
    CornerProps,
    DefaultContainerProps,
    DefaultShapeProps,
    FrameSpecificProps,
    PublishableProps,
    SelectionEventProps,
    StyleOf
} from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import {
    BorderStyleProperties,
    transformBorderStyleProperties
} from '../../styleTransformers/transformBorderProperties';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';
import { useImageHash } from '../../hooks/useImageHash';
import { useNodeIdCallback } from '../../hooks/useNodeIdCallback';

export interface ComponentProps
    extends DefaultShapeProps,
        DefaultContainerProps,
        SelectionEventProps,
        AutoLayoutProps,
        BorderProps,
        CornerProps,
        FrameSpecificProps,
        OnLayoutHandlerProps,
        PublishableProps {
    style?: StyleOf<
        GeometryStyleProperties &
            YogaStyleProperties &
            LayoutStyleProperties &
            BlendStyleProperties &
            BorderStyleProperties
    >;
    nodeRef?: any;
}

const Component: React.FC<ComponentProps> = props => {
    const nodeRef = props.nodeRef || React.useRef();
    useSelectionChange(nodeRef, props);
    useNodeIdCallback(nodeRef, props.onNodeId);
    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };
    const imageHash = useImageHash(style.backgroundImage);
    const componentProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('backgrounds', style, imageHash),
        ...transformBorderStyleProperties(style),
        ...props,
        style
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...componentProps });

    useOnLayoutHandler(yogaChildProps, props);

    return <component {...componentProps} {...yogaChildProps} innerRef={nodeRef} />;
};

export { Component };
