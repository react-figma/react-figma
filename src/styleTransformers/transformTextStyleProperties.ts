import { GeometryProps, TextNodeProps } from '../types';
import { colorToRGB } from '../helpers/color';

export type TextStyleProperties = {
    color?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: number;
};

interface TextProperties extends GeometryProps, TextNodeProps {}

export const transformTextStyleProperties = (style?: TextStyleProperties): TextProperties => {
    if (!style) {
        return {};
    }

    return {
        ...((style && style.color && { fills: [{ type: 'SOLID', color: colorToRGB(style.color) }] }) || {}),
        ...(style &&
            style.fontFamily &&
            style.fontWeight && { fontName: { family: style.fontFamily, style: style.fontWeight } }),
        ...(style && style.fontSize && { fontSize: style.fontSize })
    };
};
