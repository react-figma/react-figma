import * as React from 'react';
import { render } from '../../../src/';
import { App } from './App';

(async () => {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
    render(<App />, figma.currentPage);
    figma.closePlugin();
})();
