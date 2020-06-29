import * as React from 'react';
import {
    DefaultShapeProps,
    BorderProps,
    CornerProps,
    StyleOf,
    InstanceItemProps,
    SelectionEventProps,
} from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties,
} from '../../styleTransformers/transformLayoutStyleProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties,
} from '../../styleTransformers/transformGeometryStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';

export interface LineProps extends DefaultShapeProps, CornerProps, BorderProps, InstanceItemProps, SelectionEventProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties>;
}

export const Line: React.FC<LineProps> = (props) => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const lineProps = {
        ...transformLayoutStyleProperties(style),
        ...transformGeometryStyleProperties('fills', style),
        ...transformBlendProperties(style),
        ...props,
        style,
    };

    const yogaProps = useYogaLayout({ nodeRef, ...lineProps });

    return <line {...lineProps} {...yogaProps} innerRef={nodeRef} />;
};
