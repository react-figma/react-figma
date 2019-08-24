import * as React from 'react';
import { DefaultShapeProps, TextNodeProps } from '../../types';
import { colorToRGB } from '../../helpers/color';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';

export interface TextProps extends TextNodeProps, DefaultShapeProps {
    style?: LayoutStyleProperties & {
        color?: string;
    };
}

export const Text: React.ElementType<TextProps> = props => {
    const textProps = {
        ...transformLayoutStyleProperties(props.style),
        fills: props.style && props.style.color && [{ type: 'SOLID', color: colorToRGB(props.style.color) }],
        ...props
    };
    // @ts-ignore
    return <text {...textProps} />;
};
