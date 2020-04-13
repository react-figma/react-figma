import * as React from 'react';
import { CanvasManager } from '../../../src/reconciler/CanvasManager';
import { subscribeOnUIMessages } from '../../../src/helpers/messagePromise';

(async () => {
    const canvasManager = new CanvasManager();
    figma.ui.onmessage = message => {
        canvasManager.onMessage(message);
        subscribeOnUIMessages(message);
    };

    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
    figma.showUI(__html__);
})();
