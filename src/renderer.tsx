import * as React from 'react';
import * as renderers from './renderers';

export const renderer = async (jsx: any) => {
    if (typeof jsx.type === 'function') {
        const result = jsx.type(jsx.props);
        await renderer(result);
    } else if (jsx.type === React.Fragment) {
        React.Children.forEach(jsx.props.children, async child => {
            await renderer(child);
        });
    } else if (renderers[jsx.type]) {
        await renderers[jsx.type](jsx.props);
    }
    if (!renderers[jsx.type] && React.isValidElement<{ children: any }>(jsx) && jsx.props.children) {
        await renderer(jsx.props.children);
    }
};
