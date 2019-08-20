import * as React from 'react';
import { renderer, subscribeOnMessages } from '../../../src/';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

(async () => {
    await renderer(<App />);
    figma.closePlugin();
})();
