import { createFigma } from 'figma-api-stub';
import { frame } from '../frame';

describe('frame renderer', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('layoutMode applied', () => {
        const frameNode = frame(null)({ layoutMode: 'HORIZONTAL' });
        expect(frameNode.layoutMode).toEqual('HORIZONTAL');
    });
});
