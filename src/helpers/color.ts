import { Color } from '../types';

export const colorToRGB = (color: Color): RGB => {
    if (color[0] === '#') {
        let colorCode = color.substr(1);

        const colorInt = parseInt(colorCode, 16);

        return {
            r: ((colorInt >> 16) & 255) / 255.0,
            g: ((colorInt >> 8) & 255) / 255.0,
            b: (colorInt & 255) / 255.0
        };
    }
};

export const colorToRGBA = (color: Color, opacity: number): RGBA => {
    return {
        ...colorToRGB(color),
        a: opacity
    };
};
