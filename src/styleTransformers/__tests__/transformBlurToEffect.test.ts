import { transformBlurToEffect } from '../transformBlurToEffect';

describe('transformBlurToEffect', () => {
    it('blur radius', () => {
        const result = transformBlurToEffect({
            blurRadius: 4
        });
        expect(result).toMatchSnapshot();
    });
});
