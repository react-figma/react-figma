import * as React from 'react';
import { DefaultShapeProps, VectorNodeProps, CornerProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';

export interface VectorProps extends VectorNodeProps, DefaultShapeProps, CornerProps {
    style?: LayoutStyleProperties & BlendStyleProperties;
}

export const Vector: React.ElementType<VectorProps> = props => {
    const yogaRef = React.useRef();
    const vectorProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };
    const yogaProps = useYogaLayout({ yogaRef, ...vectorProps });
    // @ts-ignore
    return <vector {...vectorProps} {...yogaProps} innerRef={yogaRef} />;
};
