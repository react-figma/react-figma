import * as React from 'react';
import { CornerProps, DefaultContainerProps, InstanceItemProps, StyleOf } from '../../types';
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
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../../helpers/StyleSheet';

export interface SvgNodeProps extends DefaultContainerProps, InstanceItemProps {
    style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
    source?: string;
}

export const Svg: React.FC<SvgNodeProps> = props => {
    const nodeRef = React.useRef();

    const style = StyleSheet.flatten(props.style);

    const frameProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('backgrounds', style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...frameProps });

    return <svg {...frameProps} {...yogaChildProps} innerRef={nodeRef} />;
};
