import { BorderStyleProperties, transformBorderStyleProperties } from '../styleTransformers/transformBorderProperties';

import { api } from '../rpc';
import * as React from 'react';
import { Platform } from '../helpers/Platform';

export const useStrokePaintStyle = (
    style: Partial<BorderStyleProperties>,
    params: {
        name?: string;
    }
) => {
    const [strokeStyleId, setStrokeStyleId] = React.useState(null);

    const transformedStyles = {
        ...transformBorderStyleProperties(style),
        style
    };

    React.useEffect(() => {
        if (Platform.OS !== 'figma') {
            return;
        }
        const createStrokesStyle = async () => {
            if (!transformedStyles.strokes) {
                return;
            }
            const id = await api.createOrUpdatePaintStyle({
                paints: transformedStyles.strokes,
                params
            });
            setStrokeStyleId(id);
        };
        createStrokesStyle();
    }, [transformedStyles]);

    return { ...style, ...(strokeStyleId ? { strokeStyleId } : {}) };
};
