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
import { useYogaLayout } from '../../hooks/useYogaLayout';

interface RectangleProps extends DefaultShapeProps {
    style?: LayoutStyleProperties & GeometryStyleProperties;
    children?: undefined;
}

export const Rectangle: React.ElementType<RectangleProps> = props => {
    const [ref, yogaProps] = useYogaLayout(props);
    const rectangleProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...props
    };

    // @ts-ignore
    return <rectangle {...rectangleProps} {...yogaProps} innerRef={ref} />;
};
