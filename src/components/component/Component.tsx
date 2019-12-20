import * as React from 'react';
import { DefaultContainerProps, SelectionEventProps, StyleOf } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useSelectionChange } from '../../hooks/useSelectionChange';

export interface ComponentProps extends DefaultContainerProps, SelectionEventProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & BlendStyleProperties>;
    nodeRef?: any;
}

export const Component: React.FC<ComponentProps> = props => {
    const nodeRef = props.nodeRef || React.useRef();
    useSelectionChange(nodeRef, props);
    const style = StyleSheet.flatten(props.style);
    const componentProps = {
        ...transformLayoutStyleProperties(style),
        ...transformBlendProperties(style),
        ...props
    };
    const yogaChildProps = useYogaLayout({ nodeRef, ...componentProps });

    return <component {...componentProps} {...yogaChildProps} innerRef={nodeRef} />;
};
