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

export interface InstanceProps extends DefaultContainerProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
    component: ComponentNode;
}

export const Instance: React.FC<InstanceProps> = props => {
    const nodeRef = React.useRef();
    const style = StyleSheet.flatten(props.style);
    const componentProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...props
    };
    const yogaProps = useYogaLayout({ nodeRef, ...componentProps });

    return <instance {...componentProps} {...yogaProps} innerRef={nodeRef} />;
};
