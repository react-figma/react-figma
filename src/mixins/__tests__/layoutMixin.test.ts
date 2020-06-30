import { layoutMixin } from '../layoutMixin';
import { createFigma } from 'figma-api-stub';

describe('layoutMixin', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('resizing', () => {
        const resize = jest.fn((width, height) => ({ width, height }));
        layoutMixin({ type: 'RECTANGLE', resize } as any)({ width: 500, height: 200 });
        expect(resize.mock.results[0].value).toMatchSnapshot();
    });

    it('resizing without height', () => {
        const resize = jest.fn((width, height) => ({ width, height }));
        layoutMixin({ type: 'RECTANGLE', resize } as any)({ width: 500 });
        expect(resize.mock.calls.length).toBe(1);
    });

    it('resizing Line', () => {
        const resize = jest.fn((width, height) => ({ width, height }));
        layoutMixin({ type: 'LINE', resize } as any)({ width: 500 });
        expect(resize.mock.results[0].value).toMatchSnapshot();
    });

    it('apply x=0', () => {
        const node = { type: 'RECTANGLE', x: 200 } as any;
        layoutMixin(node)({ x: 0 });
        expect(node.x).toEqual(0);
    });

    it('apply y=0', () => {
        const node = { type: 'RECTANGLE', y: 100 } as any;
        layoutMixin(node)({ y: 0 });
        expect(node.y).toEqual(0);
    });

    it('resizing with zero width', () => {
        const node = figma.createRectangle();
        // @ts-ignore
        node.width = 100;
        // @ts-ignore
        node.height = 100;
        layoutMixin(node)({ width: 0, height: 10 });
        expect(node.width).toEqual(100);
        expect(node.height).toEqual(10);
    });

    it('resizing with negative width', () => {
        const node = figma.createRectangle();
        // @ts-ignore
        node.width = 100;
        // @ts-ignore
        node.height = 100;
        layoutMixin(node)({ width: -10, height: 10 });
        expect(node.width).toEqual(100);
        expect(node.height).toEqual(10);
    });

    it('resizing with zero height', () => {
        const node = figma.createRectangle();
        // @ts-ignore
        node.width = 100;
        // @ts-ignore
        node.height = 100;
        layoutMixin(node)({ width: 10, height: 0 });
        expect(node.width).toEqual(10);
        expect(node.height).toEqual(100);
    });

    it('resizing with negative height', () => {
        const node = figma.createRectangle();
        // @ts-ignore
        node.width = 100;
        // @ts-ignore
        node.height = 100;
        layoutMixin(node)({ width: 10, height: -10 });
        expect(node.width).toEqual(10);
        expect(node.height).toEqual(100);
    });

    it('setup layoutAlign', () => {
        const node = figma.createRectangle();
        layoutMixin(node)({ layoutAlign: 'CENTER' });
        expect(node.layoutAlign).toEqual('CENTER');
    });
});
