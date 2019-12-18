import * as React from 'react';
import {
    DefaultShapeProps,
    VectorNodeProps,
    CornerProps,
    StyleOf,
    InstanceItemProps,
    SelectionEventProps
} from '../../types';
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
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';

export interface VectorProps
    extends VectorNodeProps,
        DefaultShapeProps,
        CornerProps,
        InstanceItemProps,
        SelectionEventProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties & GeometryStyleProperties>;
    children?: undefined;
}

export const Vector: React.FC<VectorProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = StyleSheet.flatten(props.style);

    const vectorProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...props
    };
    const fills = useFillsPreprocessor(vectorProps);
    const yogaProps = useYogaLayout({ nodeRef, ...vectorProps });
    return <vector {...vectorProps} {...yogaProps} {...(fills && { fills })} innerRef={nodeRef} />;
};
