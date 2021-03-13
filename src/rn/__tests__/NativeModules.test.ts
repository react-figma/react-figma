import { NativeModules } from '../NativeModules';

describe('NativeModules', () => {
    it('NativeModules is object', () => {
        const version = NativeModules.PlatformConstants
            ? NativeModules.PlatformConstants.reactNativeVersion
            : undefined;
        expect(version).toBeUndefined();
    });
});
