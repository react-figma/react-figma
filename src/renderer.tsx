import * as React from 'react';
import * as renderers from './renderers';
import { searchFor } from './helpers/searchFor';
const createReconciler = require('./realm-adopted/react-reconciler');

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
    const reconciler = createReconciler({});
    let children = [];
    if (renderers[jsx.type] && jsx.props.children) {
        const promises = React.Children.map(jsx.props.children, (child, id) => renderer(child, reactId + id + 1));
        children = await Promise.all(promises);
    }
    let el;

    if (typeof jsx.type === 'function') {
        el = await renderer(jsx.type(jsx.props), reactId);
    } else if (renderers[jsx.type]) {
        el = await renderers[jsx.type](nodesCache['' + reactId])({ ...jsx.props, children });
        el.setPluginData('reactId', '' + reactId);
    }

    return el;
};
