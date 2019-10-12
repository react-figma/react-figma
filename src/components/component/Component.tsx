import * as React from 'react';
import { DefaultContainerProps, BlendProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout, YogaContextProvider } from '../../hooks/useYogaLayout';
import { transformBlendProperties } from '../../styleTransformers/transformBlendProperties';

export interface ComponentProps extends DefaultContainerProps {
    style?: LayoutStyleProperties & BlendProps;
}

export const Component: React.ElementType<ComponentProps> = props => {
    const yogaRef = React.useRef();
    const componentProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ yogaRef, ...componentProps });

    return <component {...componentProps} {...yogaChildProps} innerRef={yogaRef} />;
};
