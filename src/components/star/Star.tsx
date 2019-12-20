import * as React from 'react';
import {
    DefaultShapeProps,
    CornerProps,
    StarNodeProps,
    StyleOf,
    InstanceItemProps,
    SelectionEventProps
} from '../../types';
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
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';

export interface StarProps
    extends DefaultShapeProps,
        CornerProps,
        StarNodeProps,
        InstanceItemProps,
        SelectionEventProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
    children?: undefined;
}

export const Star: React.FC<StarProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = StyleSheet.flatten(props.style);

    const starProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...transformBlendProperties(style),
        ...props
    };
    const fills = useFillsPreprocessor(starProps);
    const yogaProps = useYogaLayout({ nodeRef, ...starProps });

    return <star {...starProps} {...yogaProps} {...(fills && { fills })} innerRef={nodeRef} />;
};
