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
import { transformAutoLayoutToYoga } from '../../styleTransformers/transformAutoLayoutToYoga';

export interface TextProps extends TextNodeProps, DefaultShapeProps, InstanceItemProps, SelectionEventProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & TextStyleProperties & BlendStyleProperties> | void;
    children?: React.ReactText | React.ReactText[];
    node?: any;
    preventResizing?: boolean;
}

const normalizeTextNodeChidren = children => {
    return Array.isArray(children) ? children.join('') : children;
};

const Text: React.FC<TextProps> = props => {
    const nodeRef = React.useRef();

    useSelectionChange(nodeRef, props);

    const style = { ...StyleSheet.flatten(props.style), ...transformAutoLayoutToYoga(props) };
    const children = normalizeTextNodeChidren(props.children);

    const charactersByChildren = useTextChildren(nodeRef);

    const textProps = {
        ...transformLayoutStyleProperties(style),
        ...transformTextStyleProperties(style),
        ...transformBlendProperties(style),
        ...props,
        characters: charactersByChildren || props.characters,
        style,
        children
    };
    const hasDefinedWidth = textProps.width || style.maxWidth;
    const loadedFont = useFontName(textProps.fontName || { family: 'Roboto', style: 'Regular' });
    const yogaProps = useYogaLayout({ nodeRef, ...textProps });

    return (
        <text
            {...textProps}
            {...yogaProps}
            hasDefinedWidth={hasDefinedWidth}
            loadedFont={loadedFont}
            innerRef={nodeRef}
        />
    );
};

export { Text };
