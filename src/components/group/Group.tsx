import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';

export interface FrameProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
}

export const Group: React.ElementType<FrameProps> = props => {
    const yogaRef = React.useRef();
    const frameProps = {
        ...transformLayoutStyleProperties(props.style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ yogaRef, ...frameProps });

    return <group {...frameProps} {...yogaChildProps} innerRef={yogaRef} />;
};
