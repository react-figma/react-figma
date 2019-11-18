import { Platform } from '../Platform';

describe('Platform', () => {
    it('OS', () => {
        expect(Platform.OS).toEqual('figma');
    });

    it('Version', () => {
        expect(Platform.Version).toEqual(1);
    });

    it('select figma', () => {
        const stub = jest.fn(() => 42);

        const result = Platform.select({ figma: stub });
        expect(result).toEqual(42);
        expect(stub).toHaveBeenCalledTimes(1);
    });

    it('select non figma', () => {
        const stub = jest.fn(() => 42);

        // @ts-ignore
        const result = Platform.select({ ios: stub });
        expect(result).toBeUndefined();
        expect(stub).toHaveBeenCalledTimes(0);
    });
});
