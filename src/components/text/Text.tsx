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
import { useYogaLayout, YogaContextProvider } from '../../hooks/useYogaLayout';

export interface TextProps extends TextNodeProps, DefaultShapeProps {
    style?: LayoutStyleProperties & TextStyleProperties;
}

export const Text: React.ElementType<TextProps> = props => {
    const yogaRef = React.useRef();
    const textProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformTextStyleProperties(props.style),
        ...props
    };
    const yogaProps = useYogaLayout({ yogaRef, ...textProps });
    // @ts-ignore
    return <text {...textProps} {...yogaProps} innerRef={yogaRef} />;
};
