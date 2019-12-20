import * as React from 'react';
import {
    CornerProps,
    DefaultShapeProps,
    InstanceItemProps,
    SelectionEventProps,
    StyleOf,
    TextNodeProps
} from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import {
    TextStyleProperties,
    transformTextStyleProperties
} from '../../styleTransformers/transformTextStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { YogaStyleProperties } from '../../yoga/YogaStyleProperties';
import { StyleSheet } from '../..';
import { useFontName } from '../../hooks/useFontName';
import { useTextChildren } from '../../hooks/useTextChildren';
import { useSelectionChange } from '../../hooks/useSelectionChange';

export interface TextProps extends TextNodeProps, DefaultShapeProps, InstanceItemProps, SelectionEventProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & TextStyleProperties & BlendStyleProperties>;
    children?: string;
    node?: any;
    preventResizing?: boolean;
}

export const Text: React.FC<TextProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = StyleSheet.flatten(props.style);

    const charactersByChildren = useTextChildren(nodeRef);

    const textProps = {
        ...transformLayoutStyleProperties(style),
        ...transformTextStyleProperties(style),
        ...transformBlendProperties(style),
        ...props,
        characters: charactersByChildren || props.characters
    };
    const loadedFont = useFontName(textProps.fontName || { family: 'Roboto', style: 'Regular' });
    const yogaProps = useYogaLayout({ nodeRef, ...textProps });

    return <text {...textProps} {...yogaProps} loadedFont={loadedFont} innerRef={nodeRef} />;
};
