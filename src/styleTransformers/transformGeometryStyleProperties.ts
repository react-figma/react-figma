import { GeometryProps } from '../types';
import { colorToPaint, colorToRGB } from './transformColors';
import { LayoutStyleProperties } from './transformLayoutStyleProperties';
import { transformSize } from '../helpers/size';

export type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center' | 'repeat' | 'none';

export type GeometryStyleProperties = {
    backgroundColor: string;
    backgroundImage: string | { uri: string } | { default: string };
    backgroundSize: ResizeMode;
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
    style?: Partial<LayoutStyleProperties & GeometryStyleProperties>,
    imageHash?: string
): GeometryProps => {
    if (!style) {
        return {};
    }

    const fills = [];

    if (style.backgroundColor) {
        fills.push(colorToPaint(style.backgroundColor));
    }

    if (style.backgroundImage) {
        let color;
        try {
            color = colorToPaint(
                typeof style.backgroundImage === 'string'
                    ? style.backgroundImage
                    : 'uri' in style.backgroundImage
                    ? style.backgroundImage.uri
                    : style.backgroundImage.default
            );
        } catch (e) {}
        if (color) {
            fills.push(color);
        } else if (imageHash) {
            if (style.backgroundSize === 'stretch') {
                fills.push({
                    type: 'IMAGE',
                    imageHash,
                    scaleMode: backgroundSizeToScaleMode.stretch,
                    imageTransform: [[transformSize(style.width), 0, 0], [0, transformSize(style.height), 0]]
                });
            } else {
                fills.push({
                    type: 'IMAGE',
                    imageHash,
                    scaleMode: style.backgroundSize
                        ? backgroundSizeToScaleMode[style.backgroundSize]
                        : backgroundSizeToScaleMode.cover
                });
            }
        }
    }

    return {
        ...((fills.length > 0 && { [property]: fills }) || {})
    };
};
