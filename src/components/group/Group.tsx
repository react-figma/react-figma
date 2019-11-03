import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout, YogaContextProvider } from '../../hooks/useYogaLayout';
import { BlendStyleProperties, transformBlendProperties } from '../../styleTransformers/transformBlendProperties';

export interface GroupProps extends DefaultShapeProps {
    style?: LayoutStyleProperties & BlendStyleProperties;
}

export const Group: React.ElementType<GroupProps> = props => {
    const yogaRef = React.useRef();

    const groupProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ yogaRef, ...groupProps });

    return (
        <YogaContextProvider yogaRef={yogaRef}>
            <group {...groupProps} {...yogaChildProps} innerRef={yogaRef} />
        </YogaContextProvider>
    );
};
