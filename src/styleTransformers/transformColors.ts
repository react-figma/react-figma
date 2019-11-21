import { Color } from '../types';
import * as parse from 'color-parse';

export const colorToRGB = (color: Color): RGB => {
    const parsed = parse(color);
    if (parsed && parsed.space === 'rgb') {
        return {
            r: parsed.values[0] / 255.0,
            g: parsed.values[1] / 255.0,
            b: parsed.values[2] / 255.0
        };
    }
};

export const colorToRGBA = (color: Color, opacity: number): RGBA => {
    return {
        ...colorToRGB(color),
        a: opacity
    };
};
