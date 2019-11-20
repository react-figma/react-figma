import * as React from 'react';
import { DefaultShapeProps, BorderProps, CornerProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';

export interface LineProps extends DefaultShapeProps, CornerProps, BorderProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
}

export const Line: React.FC<LineProps> = props => {
    const nodeRef = React.useRef();

    const style = StyleSheet.flatten(props.style);

    const lineProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...transformBlendProperties(style),
        ...props
    };

    const yogaProps = useYogaLayout({ nodeRef, ...lineProps });

    // @ts-ignore
    return <line {...lineProps} {...yogaProps} innerRef={nodeRef} />;
};
