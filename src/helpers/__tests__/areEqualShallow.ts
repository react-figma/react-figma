import { areEqualShallow } from '../areEqualShallow';

describe('areEqualShallow', () => {
    it('both args are null', () => {
        expect(areEqualShallow(null, null)).toEqual(true);
    });

    it('one arg is not object', () => {
        expect(areEqualShallow(1, null)).toEqual(false);
    });

    it('both args are empty objects', () => {
        expect(areEqualShallow({}, {})).toEqual(true);
    });

    it('objects have same keys and values (primitive)', () => {
        expect(areEqualShallow({ a: 1 }, { a: 1 })).toEqual(true);
    });

    it('objects have same keys but different values', () => {
        expect(areEqualShallow({ a: 1 }, { a: 2 })).toEqual(false);
    });

    it('objects have same keys and same non-primitive values', () => {
        expect(areEqualShallow({ a: [1] }, { a: [1] })).toEqual(false);
    });

    it('objects have different keys', () => {
        expect(areEqualShallow({ a: 1, b: 2 }, { a: 1 })).toEqual(false);
    });
});
