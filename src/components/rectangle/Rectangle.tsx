import * as React from 'react';
import {
    DefaultShapeProps,
    BorderProps,
    CornerProps,
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
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';
import {
    BorderStyleProperties,
    transformBorderStyleProperties
} from '../../styleTransformers/transformBorderProperties';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { StyleSheet } from '../..';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';

export interface RectangleProps
    extends DefaultShapeProps,
        CornerProps,
        BorderProps,
        InstanceItemProps,
        SelectionEventProps {
    style?: StyleOf<
        LayoutStyleProperties &
            YogaStyleProperties &
            BorderStyleProperties &
            BlendStyleProperties &
            GeometryStyleProperties
    >;
    children?: undefined;
}

export const Rectangle: React.FC<RectangleProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const rectangleProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...transformBorderStyleProperties(style),
        ...transformBlendProperties(style),
        ...props,
        style
    };
    const fills = useFillsPreprocessor(rectangleProps);
    const yogaProps = useYogaLayout({ nodeRef, ...rectangleProps });

    return <rectangle {...rectangleProps} {...yogaProps} {...(fills && { fills })} innerRef={nodeRef} />;
};
