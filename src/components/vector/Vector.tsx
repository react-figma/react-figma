import * as React from 'react';
import { DefaultShapeProps, VectorNodeProps, CornerProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';
import {
    transformGeometryStyleProperties,
    GeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';

export interface VectorProps extends VectorNodeProps, DefaultShapeProps, CornerProps {
    style?: YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties & GeometryStyleProperties;
    children?: undefined;
}

export const Vector: React.FC<VectorProps> = props => {
    const yogaRef = React.useRef();
    const vectorProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...props
    };
    const fills = useFillsPreprocessor(vectorProps);
    const yogaProps = useYogaLayout({ yogaRef, ...vectorProps });
    // @ts-ignore
    return <vector {...vectorProps} {...yogaProps} {...(fills && { fills })} innerRef={yogaRef} />;
};
