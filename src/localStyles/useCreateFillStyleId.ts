import { api } from '../rpc';
import * as React from 'react';
import { CommonStyleProps } from '../types';

export const useCreateFillStyleId = (transformedStyles, params: CommonStyleProps) => {
    const [fillStyleId, setFillStyleId] = React.useState(null);

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

    return [createFillsStyle, fillStyleId];
};
