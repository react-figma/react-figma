import * as React from 'react';
import { CornerProps, DefaultShapeProps, InstanceItemProps, SelectionEventProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { BlendStyleProperties, transformBlendProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';

export interface GroupNodeProps extends DefaultShapeProps, InstanceItemProps, SelectionEventProps {
    style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
}

const Group: React.FC<GroupNodeProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };

    const groupProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('backgrounds', style),
        ...props,
        style
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...groupProps });

    return <group {...groupProps} {...yogaChildProps} innerRef={nodeRef} />;
};

export { Group };
