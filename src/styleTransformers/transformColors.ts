import { Color } from '../types';
import * as parse from 'color-parse';
import gradientParse from '../helpers/gradientParser';

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

export const colorToRGBA = (color: Color, opacity?: number): RGBA => {
    const parsed = parse(color);
    if (parsed && parsed.space === 'rgb') {
        return {
            r: parsed.values[0] / 255.0,
            g: parsed.values[1] / 255.0,
            b: parsed.values[2] / 255.0,
            a: typeof opacity === 'number' ? opacity : parsed.alpha
        };
    }
};

export const colorToPaint = (color: Color): Paint => {
    let parsedGradients;
    try {
        parsedGradients = gradientParse.parse(color);
    } catch (e) {}

    const parsedGradient = parsedGradients && parsedGradients[0];
    if (parsedGradient && parsedGradient.type === 'linear-gradient') {
        let gradientTransform: Transform = [
            [Math.cos(Math.PI / 2), Math.sin(Math.PI / 2), 0],
            [-Math.sin(Math.PI / 2), Math.cos(Math.PI / 2), 1]
        ];
        if (parsedGradient.orientation) {
            const orientation = parsedGradient.orientation;
            if (orientation.type === 'directional') {
                if (orientation.value === 'right') {
                    gradientTransform = [[Math.cos(0), Math.sin(0), 0], [-Math.sin(0), Math.cos(0), 0]];
                } else if (orientation.value === 'left') {
                    gradientTransform = [
                        [Math.cos(-Math.PI), Math.sin(-Math.PI), 1],
                        [-Math.sin(-Math.PI), Math.cos(-Math.PI), 1]
                    ];
                } else if (orientation.value === 'top') {
                    gradientTransform = [
                        [Math.cos(-Math.PI / 2), Math.sin(-Math.PI / 2), 1],
                        [-Math.sin(-Math.PI / 2), Math.cos(-Math.PI / 2), 0]
                    ];
                }
            } else if (orientation.type == 'angular') {
                const angle = (parseFloat(orientation.value) / 180) * Math.PI - Math.PI / 2;
                const xc = 0.5;
                const yc = 0.5;
                const dxc = xc - (Math.cos(angle) * xc + Math.sin(angle) * yc);
                const dyc = yc - (-Math.sin(angle) * xc + Math.cos(angle) * yc);
                gradientTransform = [[Math.cos(angle), Math.sin(angle), dxc], [-Math.sin(angle), Math.cos(angle), dyc]];
            }
        }

        return {
            type: 'GRADIENT_LINEAR',
            gradientTransform,
            gradientStops: parsedGradient.colorStops.map(({ type, value, length }, index) => ({
                position: length && length.type === '%' ? parseFloat(length.value) / 100 : index === 0 ? 0 : 1,
                color: colorToRGBA(type === 'hex' ? `#${value}` : value)
            }))
        };
    }
    return { type: 'SOLID', color: colorToRGB(color) };
};
