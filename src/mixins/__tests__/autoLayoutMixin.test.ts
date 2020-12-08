import { createFigma } from 'figma-api-stub';
import { autoLayoutMixin } from '../autoLayoutMixin';

describe('autoLayoutMixin', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('horizontalPadding transforms to paddingLeft, paddingRight', () => {
        const node = figma.createFrame();
        autoLayoutMixin(node)({ horizontalPadding: 100 });
        expect(node.paddingLeft).toEqual(100);
        expect(node.paddingRight).toEqual(100);
    });

    it('horizontalPadding transforms to paddingTop, paddingBottom', () => {
        const node = figma.createFrame();
        autoLayoutMixin(node)({ verticalPadding: 100 });
        expect(node.paddingTop).toEqual(100);
        expect(node.paddingBottom).toEqual(100);
    });
});
