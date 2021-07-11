import * as React from 'react';
import {
    DefaultShapeProps,
    CornerProps,
    StarNodeProps,
    StyleOf,
    InstanceItemProps,
    SelectionEventProps
} from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';
import { useImageHash } from '../../hooks/useImageHash';
import { useNodeIdCallback } from '../../hooks/useNodeIdCallback';

export interface StarProps
    extends DefaultShapeProps,
        CornerProps,
        StarNodeProps,
        InstanceItemProps,
        SelectionEventProps,
        OnLayoutHandlerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
    children?: undefined;
}

const Star: React.FC<StarProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);
    useNodeIdCallback(nodeRef, props.onNodeId);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const imageHash = useImageHash(style.backgroundImage);

    const starProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style, imageHash),
        ...transformBlendProperties(style),
        ...props,
        style
    };
    const yogaProps = useYogaLayout({ nodeRef, ...starProps });
    useOnLayoutHandler(yogaProps, props);

    return <star {...starProps} {...yogaProps} innerRef={nodeRef} />;
};

export { Star };
