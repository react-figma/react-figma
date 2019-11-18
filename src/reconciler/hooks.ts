import { CanvasManager } from './CanvasManager';

export const injectCanvasManager = () => {
    const canvasManager = new CanvasManager();
    figma.ui.onmessage = message => canvasManager.onMessage(message);
};
