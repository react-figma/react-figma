import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { BlendStyleProperties, transformBlendProperties } from '../../styleTransformers/transformBlendProperties';

export interface GroupProps extends DefaultShapeProps {
    style?: LayoutStyleProperties & BlendStyleProperties;
}

export const Group: React.FC<GroupProps> = props => {
    const yogaRef = React.useRef();

    const groupProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ yogaRef, ...groupProps });

    return <group {...groupProps} {...yogaChildProps} innerRef={yogaRef} />;
};
