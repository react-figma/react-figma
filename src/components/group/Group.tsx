import * as React from 'react';
import { DefaultShapeProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { BlendStyleProperties, transformBlendProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { transformGeometryStyleProperties } from '../../styleTransformers/transformGeometryStyleProperties';

export interface GroupProps extends DefaultShapeProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
}

export const Group: React.FC<GroupProps> = props => {
    const yogaRef = React.useRef();

    const style = StyleSheet.flatten(props.style);

    const groupProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('backgrounds', style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ yogaRef, ...groupProps });

    return <group {...groupProps} {...yogaChildProps} innerRef={yogaRef} />;
};
