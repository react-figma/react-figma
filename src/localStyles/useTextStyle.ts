import { api } from '../rpc';
import { Platform } from '../helpers/Platform';
import { TextStyleProperties, transformTextStyleProperties } from '../styleTransformers/transformTextStyleProperties';
import * as React from 'react';
import { useFontName } from '../hooks/useFontName';
import { CommonStyleProps } from '../types';

const AVAILABLE_TEXT_PROPERTIES = [
    'fontSize',
    'textDecoration',
    'fontName',
    'letterSpacing',
    'lineHeight',
    'paragraphIndent',
    'paragraphSpacing',
    'textCase'
];

export const useTextStyle = (style: Partial<TextStyleProperties>, params: CommonStyleProps) => {
    const [textStyleId, setTextStyleId] = React.useState(null);

    const transformedStyles = React.useMemo(
        () => ({
            ...transformTextStyleProperties(style),
            style
        }),
        [style]
    );

    const textProperties = React.useMemo(() => {
        return Object.keys(transformedStyles).reduce(
            (prev, current) => ({
                ...prev,
                ...(AVAILABLE_TEXT_PROPERTIES.indexOf(current) >= 0 ? { [current]: transformedStyles[current] } : {})
            }),
            {}
        );
    }, [transformedStyles]);

    const loadedFont = useFontName((textProperties as any).fontName || { family: 'Roboto', style: 'Regular' });

    React.useEffect(() => {
        if (Platform.OS !== 'figma' || !loadedFont) {
            return;
        }
        const createTextStyle = async () => {
            if (Object.keys(textProperties).length === 0) {
                return;
            }
            const id = await api.createOrUpdateTextStyle({
                textProperties,
                params,
                loadedFont
            });
            setTextStyleId(id);
        };
        createTextStyle();
    }, [textProperties, loadedFont]);

    return { ...style, ...(textStyleId ? { textStyleId: textStyleId } : {}) };
};
