import { api } from '../rpc';
import * as React from 'react';
import { CommonStyleProps } from '../types';

export const useCreateFillStyleId = (fills: symbol | readonly Paint[], params: CommonStyleProps) => {
    const [fillStyleId, setFillStyleId] = React.useState(null);

    const createFillsStyle = async () => {
        if (!fills) {
            return;
        }
        const id = await api.createOrUpdatePaintStyle({
            paints: fills,
            params
        });
        setFillStyleId(id);
    };

    return [createFillsStyle, fillStyleId];
};
