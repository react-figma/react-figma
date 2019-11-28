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
});
