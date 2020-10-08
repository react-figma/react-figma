import { Color } from '../types';
import * as _parse from 'color-parse';
import gradientParse from '../helpers/gradientParser';

const parse = typeof _parse === 'function' ? _parse : _parse.default;

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

const transformAngleToFigmaTransformation = (value): Transform => {
    const angle = value - Math.PI / 2;

    // **
    // There is rotation relative to center through affine transformation
    // (xc, yc) is a center of the imaginary 1x1 quad
    // (dxc, dyc) is a delta between the old center and the new center (after transformation)
    // Transformation matrix has transform to the delta value, because center position should not change.
    // **
    const xc = 0.5;
    const yc = 0.5;
    const dxc = xc - (Math.cos(angle) * xc + Math.sin(angle) * yc);
    const dyc = yc - (-Math.sin(angle) * xc + Math.cos(angle) * yc);
    return [[Math.cos(angle), Math.sin(angle), dxc], [-Math.sin(angle), Math.cos(angle), dyc]];
};

export const colorToPaint = (color: Color): Paint => {
    let parsedGradients;
    try {
        parsedGradients = gradientParse.parse(color);
    } catch (e) {}

    const parsedGradient = parsedGradients && parsedGradients[0];
    if (parsedGradient && parsedGradient.type === 'linear-gradient') {
        let gradientTransform = transformAngleToFigmaTransformation(Math.PI);
        if (parsedGradient.orientation) {
            const orientation = parsedGradient.orientation;
            if (orientation.type === 'directional') {
                if (orientation.value === 'right') {
                    gradientTransform = transformAngleToFigmaTransformation(Math.PI / 2);
                } else if (orientation.value === 'left') {
                    gradientTransform = transformAngleToFigmaTransformation(-Math.PI / 2);
                } else if (orientation.value === 'top') {
                    gradientTransform = transformAngleToFigmaTransformation(0);
                }
            } else if (orientation.type == 'angular') {
                const angle = (parseFloat(orientation.value) / 180) * Math.PI;
                gradientTransform = transformAngleToFigmaTransformation(angle);
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
    const { a: alpha, ...rbg } = colorToRGBA(color);
    return { type: 'SOLID', color: rbg, opacity: alpha };
};
