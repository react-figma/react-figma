import * as React from 'react';
import { DefaultShapeProps, BorderProps, CornerProps } from '../../types';
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

export interface RectangleProps extends DefaultShapeProps, CornerProps, BorderProps {
    style?: LayoutStyleProperties & GeometryStyleProperties & BorderStyleProperties;
    children?: undefined;
}

export const Rectangle: React.ElementType<RectangleProps> = props => {
    const yogaRef = React.useRef();

    const rectangleProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...transformBorderStyleProperties(props.style),
        ...props
    };
    const fills = useFillsPreprocessor(rectangleProps);
    const yogaProps = useYogaLayout({ yogaRef, ...rectangleProps });

    // @ts-ignore
    return <rectangle {...rectangleProps} {...yogaProps} {...(fills && { fills })} innerRef={yogaRef} />;
};
