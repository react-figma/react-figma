import { createFigma } from 'figma-api-stub';
import { text } from '../text';

describe('text renderer', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    // * Motivation *
    // Without setup textAutoResize text can unexpectedly wrap to the next line
    // --------------
    it('textAutoResize: WIDTH_AND_HEIGHT by default', () => {
        const textNode = text(null)({});
        expect(textNode.textAutoResize).toEqual('WIDTH_AND_HEIGHT');
    });

    it('textAutoResize prop supported overrides default', () => {
        const textNode = text(null)({ textAutoResize: 'HEIGHT' });
        expect(textNode.textAutoResize).toEqual('HEIGHT');
    });
});
