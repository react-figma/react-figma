import { LayoutStyleProperties } from '../styleTransformers/transformLayoutStyleProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../styleTransformers/transformGeometryStyleProperties';

import { api } from '../rpc';

export const createPaintStyle = (
    style: Partial<LayoutStyleProperties & GeometryStyleProperties>,
    params: {
        name?: string;
    }
) => {
    const transformedStyle = transformGeometryStyleProperties('fills', style);
    api.createPaintStyle({
        paints: transformedStyle.fills,
        params
    });
    return style;
};
