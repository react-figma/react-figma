import * as React from 'react';
import { DefaultShapeProps, BorderProps, CornerProps, StyleOf } from '../../types';
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

export interface RectangleProps extends DefaultShapeProps, CornerProps, BorderProps {
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

    const style = StyleSheet.flatten(props.style);

    const rectangleProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...transformBorderStyleProperties(style),
        ...transformBlendProperties(style),
        ...props
    };
    const fills = useFillsPreprocessor(rectangleProps);
    const yogaProps = useYogaLayout({ nodeRef, ...rectangleProps });

    // @ts-ignore
    return <rectangle {...rectangleProps} {...yogaProps} {...(fills && { fills })} innerRef={nodeRef} />;
};
