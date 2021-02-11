import { BorderStyleProperties, transformBorderStyleProperties } from '../styleTransformers/transformBorderProperties';

import { api } from '../rpc';
import * as React from 'react';

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
