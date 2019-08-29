import * as React from 'react';
import * as renderers from './renderers';
import { searchFor } from './helpers/searchFor';
import * as reconciled from 'reconciled';

const nodesCache: {
    [reactId: string]: BaseNodeMixin;
} = {};

if (typeof figma !== 'undefined' && figma.root) {
    searchFor(
        figma.root,
        node => !!node.getPluginData('reactId') || parseInt(node.getPluginData('reactId')) === 0,
        results => {
            results.forEach(result => {
                nodesCache[result.getPluginData('reactId')] = result;
            });
        }
    );
}

export const renderer = async (jsx: any, reactId: number = 0) => {
    const reconciler = reconciled({
        createNode: (type, props) => renderers[type]()({ ...props }),
        appendNode: (parentNode, childNode) => parentNode.appendChild(childNode)
    });

    const app = reconciler.create(figma.root);
    app.render(jsx);
    app.unmount();
};
