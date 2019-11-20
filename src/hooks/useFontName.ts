import * as React from 'react';

export const useFontName = (fontName: FontName) => {
    const [loadedFont, setLoadedFont] = React.useState(null);
    React.useEffect(() => {
        const loader = async () => {
            await figma.loadFontAsync(fontName);
            setLoadedFont(fontName);
        };
        loader();
    }, [fontName.family, fontName.style]);

    return loadedFont;
};
