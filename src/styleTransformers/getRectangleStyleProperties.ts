import { GeometryStyleProperties } from './transformGeometryStyleProperties';
import { YogaStyleProperties } from '../yoga/YogaStyleProperties';
import { LayoutStyleProperties } from './transformLayoutStyleProperties';
import { BlendStyleProperties } from './transformBlendProperties';
import { BorderStyleProperties } from './transformBorderProperties';

const rectangleStyleProperties = [
    'backgroundColor',
    'backgroundImage',
    'backgroundSize',
    'blendMode',
    'shadowColor',
    'shadowOffset',
    'shadowOpacity',
    'shadowRadius',
    'borderColor',
    'borderWidth',
    'borderRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius'
];

export const getRectangleStyleProperties = (
    style: Partial<
        GeometryStyleProperties &
            YogaStyleProperties &
            BorderStyleProperties &
            LayoutStyleProperties &
            BlendStyleProperties
    >
): Partial<GeometryStyleProperties & BlendStyleProperties & BorderStyleProperties> => {
    const result = {};
    rectangleStyleProperties.forEach(prop => {
        if (style[prop]) {
            result[prop] = style[prop];
        }
    });
    return result;
};
