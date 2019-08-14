import * as React from 'react';
import * as renderers from './renderers';

export const renderer = async (jsx: any) => {
    let children = [];
    if (!renderers[jsx.type] && jsx.props.children) {
        const promises = React.Children.map(jsx.props.children, renderer);
        children = await Promise.all(promises);
    }
    let el;

    if (typeof jsx.type === 'function') {
        el = await renderer(jsx.type(jsx.props));
    } else if (renderers[jsx.type]) {
        el = await renderers[jsx.type](jsx.props);
    }

    // TODO move appendChild to childrenMixin
    if (el.appendChild && children.length > 0) {
        children.forEach(child => {
            el.appendChild(child);
        });
    }
    return el;
};
