import { layoutMixin } from '../layoutMixin';

describe('layoutMixin', () => {
    it('resizing', () => {
        const resize = jest.fn((width, height) => ({ width, height }));
        layoutMixin({ type: 'RECTANGLE', resize } as any)({ width: 500, height: 200 });
        expect(resize.mock.results[0].value).toMatchSnapshot();
    });

    it('resizing without height', () => {
        const resize = jest.fn((width, height) => ({ width, height }));
        layoutMixin({ type: 'RECTANGLE', resize } as any)({ width: 500 });
        expect(resize.mock.calls.length).toBe(0);
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
});
