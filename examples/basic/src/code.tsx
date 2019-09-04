import * as React from 'react';
import { renderer, subscribeOnMessages } from '../../../src/';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

(async () => {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
    await renderer(<App />, figma.root);
    figma.closePlugin();
})();
