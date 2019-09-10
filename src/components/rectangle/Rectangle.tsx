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
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';

interface RectangleProps extends DefaultShapeProps {
    style?: LayoutStyleProperties & GeometryStyleProperties;
    children?: undefined;
}

export const Rectangle: React.ElementType<RectangleProps> = props => {
    const yogaRef = React.useRef();
    const yogaProps = useYogaLayout({ yogaRef });

    const rectangleProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...props
    };
    const fills = useFillsPreprocessor(rectangleProps);

    // @ts-ignore
    return (
        <rectangle
            {...rectangleProps}
            {...yogaProps}
            {...((fills && { fills }) || { fills: null })}
            innerRef={yogaRef}
        />
    );
};
