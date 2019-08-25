import { GeometryProps, TextNodeProps } from '../types';
import { colorToRGB } from '../helpers/color';

export type TextStyleProperties = {
    color?: string;
};

interface TextProperties extends GeometryProps, TextNodeProps {}

export const transformTextStyleProperties = (style?: TextStyleProperties): TextProperties => {
    if (!style) {
        return {};
    }

    return {
        ...((style && style.color && { fills: [{ type: 'SOLID', color: colorToRGB(style.color) }] }) || {})
    };
};
