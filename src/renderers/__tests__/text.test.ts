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
    it('textAutoResize: WIDTH_AND_HEIGHT by default', async () => {
        await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
        const textNode = text(null)({});
        expect(textNode.textAutoResize).toEqual('WIDTH_AND_HEIGHT');
    });

    it('textAutoResize prop supported overrides default', async () => {
        await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
        const textNode = text(null)({ textAutoResize: 'HEIGHT' });
        expect(textNode.textAutoResize).toEqual('HEIGHT');
    });

    // * Motivation *
    // When there is width prop we should resize the only height.
    // --------------
    it('textAutoResize: HEIGHT when has width prop', async () => {
        await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
        const node = figma.createText();
        // @ts-ignore
        node.height = 20;
        const textNode = text(node)({ width: 200 });
        expect(textNode.textAutoResize).toEqual('HEIGHT');
    });
});
