import * as React from 'react';
import { DefaultContainerProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';

export interface ComponentProps extends DefaultContainerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
}

export const Component: React.FC<ComponentProps> = props => {
    const yogaRef = React.useRef();
    const style = StyleSheet.flatten(props.style);
    const componentProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ yogaRef, ...componentProps });

    return <component {...componentProps} {...yogaChildProps} innerRef={yogaRef} />;
};
