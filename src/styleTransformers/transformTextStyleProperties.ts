import { GeometryProps, TextNodeProps } from '../types';
import { colorToRGB } from '../helpers/color';
import { convertFontStyle } from './converFontStyle';

export type TextStyleProperties = {
    color?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    fontStyle?: 'normal' | 'italic';
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
            style.fontFamily && {
                fontName: { family: style.fontFamily, style: convertFontStyle(style.fontWeight, style.fontStyle) }
            }),
        ...(style && style.fontSize && { fontSize: style.fontSize })
    };
};
