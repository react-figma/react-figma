import * as React from 'react';
import { isEqualFontStyle } from '../helpers/isEqualFontStyle';
import { api } from '../rpc';

export const useFontName = (fontName: FontName) => {
    const [loadedFont, setLoadedFont] = React.useState(null);
    React.useEffect(() => {
        const loader = async () => {
            const fonts = await api.listAvailableFontsAsync();
            const findedFont = fonts.find(
                font =>
                    font.fontName.family === fontName.family && isEqualFontStyle(font.fontName.style, fontName.style)
            );
            if (!findedFont) {
                console.warn(`Font ${fontName.family} ${fontName.style} not found`);
                return;
            }
            await api.loadFontAsync(findedFont.fontName);
            setLoadedFont(findedFont.fontName);
        };
        loader();
    }, [fontName.family, fontName.style]);

    return loadedFont;
};
