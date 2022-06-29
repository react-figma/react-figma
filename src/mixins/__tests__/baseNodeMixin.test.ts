import { baseNodeMixin } from '../baseNodeMixin';
import { createFigma } from 'figma-api-stub';

describe('baseNodeMixin', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('sharedPluginData', () => {
        const node = figma.createRectangle();
        baseNodeMixin(node)({
            sharedPluginData: {
                tokens: {
                    fill: 'bg.default'
                }
            }
        });
        expect(node.getSharedPluginData('tokens', 'fill')).toBe('bg.default');
    });
});
