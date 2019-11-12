import * as React from 'react';
import { DefaultShapeProps, CornerProps, StyleOf } from '../../types';
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
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';

export interface EllipseProps extends DefaultShapeProps, CornerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
    children?: undefined;
    arcData?: ArcData;
}

export const Ellipse: React.FC<EllipseProps> = props => {
    const yogaRef = React.useRef();
    const style = StyleSheet.flatten(props.style);

    const ellipseProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties(style),
        ...props
    };
    const fills = useFillsPreprocessor(ellipseProps);
    const yogaChildProps = useYogaLayout({ yogaRef, ...ellipseProps });
    return <ellipse {...ellipseProps} {...yogaChildProps} {...(fills && { fills })} innerRef={yogaRef} />;
};
