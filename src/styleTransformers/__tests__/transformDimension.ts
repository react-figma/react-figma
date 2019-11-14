import { transformDimension } from '../transformDimension';

describe('transformDimension', () => {
    it('number', () => {
        const result = transformDimension(10);
        expect(result).toMatchObject({
            value: 10,
            type: 'px'
        });
    });

    it('px', () => {
        const result = transformDimension('10px');
        expect(result).toMatchObject({
            value: 10,
            type: 'px'
        });
    });

    it('percentage', () => {
        const result = transformDimension('10%');
        expect(result).toMatchObject({
            value: 10,
            type: 'percentage'
        });
    });

    it('percentage (float value)', () => {
        const result = transformDimension('10.5%');
        expect(result).toMatchObject({
            value: 10.5,
            type: 'percentage'
        });
    });
});
