import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../styleTransformers/transformGeometryStyleProperties';

import { api } from '../rpc';
import * as React from 'react';
import { useImageHash } from '../hooks/useImageHash';
import { Platform } from '../helpers/Platform';
import { CommonStyleProps } from '../types';
import { useCreateFillStyleId } from './useCreateFillStyleId';

export const useFillPaintStyle = (style: Partial<GeometryStyleProperties>, params: CommonStyleProps) => {
    const imageHash = useImageHash(style.backgroundImage);

    const transformedStyles = {
        ...transformGeometryStyleProperties('fills', style, imageHash),
        style
    };
    const [createFillsStyle, fillStyleId] = useCreateFillStyleId(transformedStyles, params);

    React.useEffect(() => {
        if (Platform.OS !== 'figma') {
            return;
        }

        createFillsStyle();
    }, [transformedStyles]);

    return { ...style, ...(fillStyleId ? { fillStyleId } : {}) };
};
