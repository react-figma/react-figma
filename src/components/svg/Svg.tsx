import * as React from 'react';
import { DefaultContainerProps, StyleOf } from '../../types';
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

export interface SvgNodeProps extends DefaultContainerProps {
    style?: StyleOf<GeometryStyleProperties & YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
    source?: string;
}

type SvgParts = {
    G: React.FC<any>;
    Path: React.FC<any>;
};

export const Svg: React.FC<SvgNodeProps> & SvgParts = props => {
    const nodeRef = React.useRef();

    const style = StyleSheet.flatten(props.style);

    const frameProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...transformGeometryStyleProperties('backgrounds', style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...frameProps });

    return <svg {...frameProps} {...yogaChildProps} isWaitParts={!!props.children} innerRef={nodeRef} />;
};

Svg.G = props => {
    return <svgPart svgTag="g" {...props} />;
};

Svg.Path = props => {
    return <svgPart svgTag="path" {...props} />;
};
