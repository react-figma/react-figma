import { api } from '../rpc';
import * as React from 'react';
import { CommonStyle } from '../types';

export const useStyleByKey = (styleKey: string): BaseStyle => {
    const [style, setStyle] = React.useState<BaseStyle>(null);

    React.useEffect(() => {
        if (styleKey) {
            api.importStyleByKeyAsync(styleKey).then(setStyle);
        }
    }, [styleKey]);

    return style;
};
