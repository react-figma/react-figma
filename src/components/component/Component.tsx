import * as React from 'react';
import {
    AutoLayoutProps,
    BorderProps,
    CornerProps,
    DefaultContainerProps,
    DefaultShapeProps,
    FrameSpecificProps,
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

interface DocumentationLink {
    readonly uri: string;
}

export interface ComponentProps
    extends DefaultShapeProps,
        DefaultContainerProps,
        SelectionEventProps,
        AutoLayoutProps,
        BorderProps,
        CornerProps,
        FrameSpecificProps,
        OnLayoutHandlerProps {
    style?: StyleOf<
        GeometryStyleProperties &
            YogaStyleProperties &
            LayoutStyleProperties &
            BlendStyleProperties &
            BorderStyleProperties
    >;
    nodeRef?: any;
    description?: string;
    documentationLinks?: ReadonlyArray<DocumentationLink>;
}

const Component: React.FC<ComponentProps> = props => {
    const nodeRef = props.nodeRef || React.useRef();
    useSelectionChange(nodeRef, props);
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
