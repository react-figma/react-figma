import { api } from '../rpc';
import * as React from 'react';
import { Platform } from '../helpers/Platform';
import { CommonStyleProps } from '../types';
import { BlendStyleProperties, transformBlendProperties } from '../styleTransformers/transformBlendProperties';
import { useCreateEffectStyleId } from './useCreateEffectStyleId';

export const useEffectStyle = (style: Partial<BlendStyleProperties>, params: CommonStyleProps) => {
    const transformedStyles = {
        ...transformBlendProperties(style),
        style
    };
    const [createEffectStyle, effectStyleId] = useCreateEffectStyleId(transformedStyles.effects, params);

    React.useEffect(() => {
        if (Platform.OS !== 'figma') {
            return;
        }

        createEffectStyle();
    }, [transformedStyles]);

    return { ...style, ...(effectStyleId ? { effectStyleId } : {}) };
};
