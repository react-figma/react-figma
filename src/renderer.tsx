import * as React from 'react';
import * as renderers from "./renderers"

export const renderer = async (jsx: React.ReactElement<any>) => {
    const queue = [];

    const collectQueue = (jsx) => {
        if (typeof jsx.type === "function") {
            const result = jsx.type(jsx.props);
            collectQueue(result);
        } else if (renderers[jsx.type]) {
            queue.push(jsx)
        }
        if (!renderers[jsx.type] && React.isValidElement<{children: any}>(jsx) && jsx.props.children) {
            collectQueue(jsx.props.children)
        }
    };
    collectQueue(jsx);

    for (const item of queue) {
        await renderers[item.type](item.props);
    }
};
