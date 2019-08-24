import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';

export interface FrameProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
}

export const Frame: React.ElementType<FrameProps> = props => {
    const frameProps = {
        ...transformLayoutStyleProperties(props.style),
        ...props
    };

    return <frame {...frameProps} />;
};
