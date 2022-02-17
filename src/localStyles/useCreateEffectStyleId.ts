import { api } from '../rpc';
import * as React from 'react';
import { CommonStyleProps } from '../types';

export const useCreateEffectStyleId = (effects: symbol | readonly Effect[], params: CommonStyleProps) => {
    const [effectStyleId, setEffectStyleId] = React.useState(null);

    const createEffectStyle = async () => {
        if (!effects) {
            return;
        }
        const id = await api.createOrUpdateEffectStyle({
            effects,
            params
        });
        setEffectStyleId(id);
    };

    return [createEffectStyle, effectStyleId];
};
