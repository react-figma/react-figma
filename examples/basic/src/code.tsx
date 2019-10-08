import * as React from 'react';
import { render, subscribeOnMessages } from '../../../src/';
import { App } from './App';
import { YogaContextProvider } from '../../../src/hooks/useYogaLayout';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

(async () => {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
    render(<App />, figma.root);
})();
