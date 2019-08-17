import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import { colorToRGB } from '../../helpers/color';

export interface TextProps extends DefaultShapeProps {
    style?: {
        width?: number;
        height?: number;
        color?: string;
    };
    children?: undefined;
    characters?: string;
}

export const Text: React.ElementType<TextProps> = props => {
    const textProps = {
        width: props.style && props.style.width,
        height: props.style && props.style.height,
        fills: props.style && props.style.color && [{ type: 'SOLID', color: colorToRGB(props.style.color) }],
        ...props
    };
    return <text {...textProps} />;
};
