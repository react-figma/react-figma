import { LayoutStyleProperties } from '../styleTransformers/transformLayoutStyleProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../styleTransformers/transformGeometryStyleProperties';

import { api } from '../rpc';
import * as React from 'react';

export const usePaintStyle = (
    style: Partial<LayoutStyleProperties & GeometryStyleProperties>,
    params: {
        name?: string;
    }
) => {
    const [paintStyleId, setPaintStyleId] = React.useState(null);
    const transformedStyle = transformGeometryStyleProperties('fills', style);

    React.useEffect(() => {
        const createStyle = async () => {
            const id = await api.createOrUpdatePaintStyle({
                paints: transformedStyle.fills,
                params
            });
            setPaintStyleId(id);
        };
        createStyle();
    }, []);

    return { ...style, ...(paintStyleId ? { fillStyleId: paintStyleId } : {}) };
};
