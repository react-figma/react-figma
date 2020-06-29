import { transformShadowToEffect } from '../transformShadowToEffect';

describe('transformShadowToEffect', () => {
    it('opacity from rgba', () => {
        const result = transformShadowToEffect({
            shadowColor: 'rgba(52,208,88,0.4)',
        });
        expect(result).toMatchSnapshot();
    });
});
