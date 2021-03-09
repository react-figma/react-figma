import { I18nManager } from '../I18nManager';

describe('I18nManager', () => {
    it('isRTL is equal to false', () => {
        expect(I18nManager.isRTL).toEqual(false);
    });
});
