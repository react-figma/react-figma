import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';

interface RectangleProps extends DefaultShapeProps {
    style?: LayoutStyleProperties & GeometryStyleProperties;
    children?: undefined;
}

export const Rectangle: React.ElementType<RectangleProps> = props => {
    const rectangleProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...props
    };

    return <rectangle {...rectangleProps} />;
};
