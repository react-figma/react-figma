import { transformTextStyleProperties } from '../transformTextStyleProperties';

describe('transformTextStyleProperties', () => {
    it('textAlign auto', () => {
        const result = transformTextStyleProperties({ textAlign: 'auto' });
        expect(result).toMatchSnapshot();
    });

    it('textAlign center', () => {
        const result = transformTextStyleProperties({ textAlign: 'center' });
        expect(result).toMatchSnapshot();
    });

    it('textAlign justify', () => {
        const result = transformTextStyleProperties({ textAlign: 'justify' });
        expect(result).toMatchSnapshot();
    });
});
