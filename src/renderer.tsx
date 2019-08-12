import * as React from 'react';
import * as renderers from "./renderers"

export const renderer = async (jsx: React.ReactElement<any>) => {
    if (typeof jsx.type === "function") {
        // @ts-ignore
        const result = jsx.type(jsx.props);
        await renderer(result);
    } else if (renderers[jsx.type]) {
        await renderers[jsx.type](jsx.props);
    }
};
