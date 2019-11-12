import * as React from 'react';
import { DefaultContainerProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';

export interface ComponentProps extends DefaultContainerProps {
    style?: YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties;
}

export const Component: React.FC<ComponentProps> = props => {
    const yogaRef = React.useRef();
    const componentProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ yogaRef, ...componentProps });

    return <component {...componentProps} {...yogaChildProps} innerRef={yogaRef} />;
};
