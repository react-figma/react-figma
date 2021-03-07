import { Easing } from '../../index';

describe('Easing', () => {
    it('linear works', () => {
        const result = Easing.linear(0.15);
        expect(result).toEqual(0.15);
    });

    it('quad works', () => {
        const result = Easing.quad(0.5);
        expect(result).toEqual(0.25);
    });
});
