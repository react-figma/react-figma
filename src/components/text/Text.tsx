import * as React from 'react';
import { DefaultShapeProps, TextNodeProps } from '../../types';
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

export interface TextProps extends TextNodeProps, DefaultShapeProps {
    style?: LayoutStyleProperties & TextStyleProperties & BlendStyleProperties;
}

export const Text: React.ElementType<TextProps> = props => {
    const yogaRef = React.useRef();
    const textProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformTextStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...props
    };
    const yogaProps = useYogaLayout({ yogaRef, ...textProps });
    // @ts-ignore
    return <text {...textProps} {...yogaProps} innerRef={yogaRef} />;
};
