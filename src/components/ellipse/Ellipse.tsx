import * as React from 'react';
import { DefaultShapeProps, CornerProps, StyleOf, InstanceItemProps, SelectionEventProps } from '../../types';
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
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';
import { OnLayoutHandlerProps, useOnLayoutHandler } from '../../hooks/useOnLayoutHandler';
import { useImageHash } from '../../hooks/useImageHash';
import { useNodeIdCallback } from '../../hooks/useNodeIdCallback';

export interface EllipseProps
    extends DefaultShapeProps,
        CornerProps,
        InstanceItemProps,
        SelectionEventProps,
        OnLayoutHandlerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
    children?: undefined;
    arcData?: ArcData;
}

const Ellipse: React.FC<EllipseProps> = props => {
    const nodeRef = React.useRef();
    useSelectionChange(nodeRef, props);
    useNodeIdCallback(nodeRef, props.onNodeId);
    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const imageHash = useImageHash(style.backgroundImage);

    const ellipseProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('fills', style, imageHash),
        ...props,
        style
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...ellipseProps });
    useOnLayoutHandler(yogaChildProps, props);

    return <ellipse {...ellipseProps} {...yogaChildProps} innerRef={nodeRef} />;
};

export { Ellipse };
