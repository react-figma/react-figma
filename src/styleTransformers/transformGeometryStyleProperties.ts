import { GeometryProps } from '../types';
import { colorToRGB } from '../helpers/color';
import { LayoutStyleProperties } from './transformLayoutStyleProperties';
import { transformSize } from '../helpers/size';

export type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center' | 'repeat' | 'none';

export type GeometryStyleProperties = {
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundSize?: ResizeMode;
};

const backgroundSizeToScaleMode = {
    cover: 'FILL',
    contain: 'FIT',
    repeat: 'TILE',
    center: 'CROP',
    stretch: 'CROP',
    none: 'FILL'
};

export const transformGeometryStyleProperties = (
    property: 'fills' | 'backgrounds',
    style?: LayoutStyleProperties & GeometryStyleProperties
): GeometryProps => {
    if (!style) {
        return {};
    }

    const fills = [];

    if (style.backgroundColor) {
        fills.push({ type: 'SOLID', color: colorToRGB(style.backgroundColor) });
    }

    if (style.backgroundImage) {
        if (style.backgroundSize === 'stretch') {
            fills.push({
                type: 'IMAGE',
                image: style.backgroundImage,
                scaleMode: backgroundSizeToScaleMode.stretch,
                imageTransform: [[transformSize(style.width), 0, 0], [0, transformSize(style.height), 0]]
            });
        } else {
            fills.push({
                type: 'IMAGE',
                image: style.backgroundImage,
                scaleMode: style.backgroundSize ? backgroundSizeToScaleMode[style.backgroundSize] : undefined
            });
        }
    }

    return {
        ...((fills.length > 0 && { [property]: fills }) || {})
    };
};
