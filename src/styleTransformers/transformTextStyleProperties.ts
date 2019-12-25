import { Color, GeometryProps, TextNodeProps } from '../types';
import { colorToPaint, colorToRGB } from './transformColors';
import { convertFontStyle } from './converFontStyle';
import { transformDimensionMapper } from './transformDimension';
import { transformShadowToEffect } from './transformShadowToEffect';

export interface TextStyleProperties {
    color: string;
    fontFamily: string;
    fontWeight: string | number;
    fontStyle: 'normal' | 'italic';
    fontSize: number;
    textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify';
    lineHeight: number | string;
    letterSpacing: number | string;
    textDecorationLine: 'none' | 'underline' | 'line-through';
    textShadowColor: Color;
    textShadowOffset: { width: number; height: number };
    textShadowRadius: number;
}

interface TextProperties extends GeometryProps, TextNodeProps {}

const textAlignMapping = {
    left: 'LEFT',
    right: 'RIGHT',
    center: 'CENTER',
    justify: 'JUSTIFIED'
};

const textDecorationLineMapping = {
    none: 'NONE',
    underline: 'UNDERLINE',
    'line-through': 'STRIKETHROUGH'
};

export const transformTextStyleProperties = (style?: Partial<TextStyleProperties>): TextProperties => {
    if (!style) {
        return {};
    }

    return {
        ...((style && style.color && { fills: [colorToPaint(style.color)] }) || {}),
        ...(style &&
            style.fontFamily && {
                fontName: { family: style.fontFamily, style: convertFontStyle(style.fontWeight, style.fontStyle) }
            }),
        ...(style && style.fontSize && { fontSize: style.fontSize }),
        ...(style &&
            style.textAlign &&
            textAlignMapping[style.textAlign] && { textAlignHorizontal: textAlignMapping[style.textAlign] }),
        ...(style && typeof style.lineHeight === 'number'
            ? { lineHeight: { value: style.lineHeight * 100, unit: 'PERCENT' } }
            : typeof style.lineHeight === 'string' && {
                  lineHeight: transformDimensionMapper<LineHeight, LineHeight, LineHeight>(style.lineHeight)
                      .px(value => ({ value, unit: 'PIXELS' }))
                      .percentage(value => ({ value, unit: 'PERCENT' }))
                      .auto(() => ({ unit: 'AUTO' }))
                      .value()
              }),
        ...(style &&
            (typeof style.letterSpacing === 'number' || typeof style.letterSpacing === 'string') && {
                letterSpacing: transformDimensionMapper<LetterSpacing, LetterSpacing, LetterSpacing>(
                    style.letterSpacing
                )
                    .px(value => ({ value, unit: 'PIXELS' }))
                    .percentage(value => ({ value, unit: 'PERCENT' }))
                    .value()
            }),
        ...(style &&
            style.textDecorationLine &&
            textDecorationLineMapping[style.textDecorationLine] && {
                textDecorationLine: textDecorationLineMapping[style.textDecorationLine]
            }),
        ...(style &&
            style.textShadowColor && {
                effects: [
                    transformShadowToEffect({
                        shadowColor: style.textShadowColor,
                        shadowOffset: style.textShadowOffset,
                        shadowRadius: style.textShadowRadius
                    })
                ]
            })
    };
};
