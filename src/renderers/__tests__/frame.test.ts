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

    it('locked prop applied', () => {
        const frameNode = frame(null)({ locked: true });
        expect(frameNode.locked).toEqual(true);
    });

    it('visible prop applied', () => {
        const frameNode = frame(null)({ visible: false });
        expect(frameNode.visible).toEqual(false);
    });
});
