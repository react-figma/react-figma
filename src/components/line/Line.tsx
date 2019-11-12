import * as React from 'react';
import { DefaultShapeProps, BorderProps, CornerProps } from '../../types';
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

export interface LineProps extends DefaultShapeProps, CornerProps, BorderProps {
    style?: LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties;
}

export const Line: React.FC<LineProps> = props => {
    const yogaRef = React.useRef();

    const lineProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };

    const yogaProps = useYogaLayout({ yogaRef, ...lineProps });

    // @ts-ignore
    return <line {...lineProps} {...yogaProps} innerRef={yogaRef} />;
};
