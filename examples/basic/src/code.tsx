import * as React from 'react';
import { injectCanvasManager } from '../../../src/reconciler/hooks';

(async () => {
    injectCanvasManager();

    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
    figma.showUI(__html__);
})();
