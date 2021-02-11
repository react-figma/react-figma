import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../styleTransformers/transformGeometryStyleProperties';

import { api } from '../rpc';
import * as React from 'react';
import { useImageHash } from '../hooks/useImageHash';

export const useFillPaintStyle = (
    style: Partial<GeometryStyleProperties>,
    params: {
        name?: string;
    }
) => {
    const [fillStyleId, setFillStyleId] = React.useState(null);
    const imageHash = useImageHash(style.backgroundImage);

    const transformedStyles = {
        ...transformGeometryStyleProperties('fills', style, imageHash),
        style
    };

    React.useEffect(() => {
        const createFillsStyle = async () => {
            if (!transformedStyles.fills) {
                return;
            }
            const id = await api.createOrUpdatePaintStyle({
                paints: transformedStyles.fills,
                params
            });
            setFillStyleId(id);
        };
        createFillsStyle();
    }, [transformedStyles]);

    return { ...style, ...(fillStyleId ? { fillStyleId } : {}) };
};
