import { GeometryProps } from '../types';
import { colorToRGB } from '../helpers/color';

export type GeometryStyleProperties = {
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundSize?: 'cover' | 'contain';
};

const backgroundSizeToScaleMode = {
    cover: 'FILL',
    contain: 'FIT'
};

export const transformGeometryStyleProperties = (style?: GeometryStyleProperties): GeometryProps => {
    if (!style) {
        return {};
    }
    const fills = [];

    if (style && style.backgroundColor) {
        fills.push({ type: 'SOLID', color: colorToRGB(style.backgroundColor) });
    }

    if (style && style.backgroundImage) {
        fills.push({
            type: 'IMAGE',
            image: style.backgroundImage,
            scaleMode: style.backgroundSize && backgroundSizeToScaleMode[style.backgroundSize]
        });
    }
    return {
        ...((fills.length > 0 && { fills }) || {})
    };
};
