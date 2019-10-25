import * as React from 'react';
import { DefaultShapeProps, CornerProps, StarNodeProps } from '../../types';
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
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';

export interface StarProps extends DefaultShapeProps, CornerProps, StarNodeProps {
    style?: LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties;
    children?: undefined;
}

export const Star: React.ElementType<StarProps> = props => {
    const yogaRef = React.useRef();

    const starProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };
    const fills = useFillsPreprocessor(starProps);
    const yogaProps = useYogaLayout({ yogaRef, ...starProps });

    // @ts-ignore
    return <star {...starProps} {...yogaProps} {...(fills && { fills })} innerRef={yogaRef} />;
};
