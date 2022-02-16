import { createFigma } from 'figma-api-stub';
import { rectangle } from '../rectangle';

describe('rectangle renderer', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('effectStyleId applied', () => {
        const rectangleNode = rectangle(null)({
            effectStyleId: 'effectStyleIdTest',
            effects: [{ type: 'LAYER_BLUR', radius: 4, visible: true }]
        });
        expect(rectangleNode.effectStyleId).toEqual('effectStyleIdTest');
    });
});
