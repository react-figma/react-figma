import * as React from 'react';
import { DefaultShapeProps, StyleOf, TextNodeProps } from '../../types';
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

export interface TextProps extends TextNodeProps, DefaultShapeProps {
    style?: StyleOf<YogaStyleProperties & LayoutStyleProperties & TextStyleProperties & BlendStyleProperties>;
    children?: string;
}

export const Text: React.FC<TextProps> = props => {
    const yogaRef = React.useRef();

    const style = StyleSheet.flatten(props.style);

    const textProps = {
        ...transformLayoutStyleProperties(style),
        ...transformTextStyleProperties(style),
        ...transformBlendProperties(style),
        ...props
    };
    const yogaProps = useYogaLayout({ yogaRef, ...textProps });
    // @ts-ignore
    return <text {...textProps} {...yogaProps} innerRef={yogaRef} />;
};
