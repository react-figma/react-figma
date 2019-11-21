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

    it('lineHeight "50%"', () => {
        const result = transformTextStyleProperties({ lineHeight: '50%' });
        expect(result).toMatchSnapshot();
    });

    it('lineHeight 1.4', () => {
        const result = transformTextStyleProperties({ lineHeight: 1.4 });
        expect(result).toMatchSnapshot();
    });

    it('lineHeight auto', () => {
        const result = transformTextStyleProperties({ lineHeight: 'auto' });
        expect(result).toMatchSnapshot();
    });

    it('letterSpacing "50%"', () => {
        const result = transformTextStyleProperties({ letterSpacing: '50%' });
        expect(result).toMatchSnapshot();
    });

    it('letterSpacing 1.4', () => {
        const result = transformTextStyleProperties({ letterSpacing: 1.4 });
        expect(result).toMatchSnapshot();
    });

    it('textDecorationLine line-through', () => {
        const result = transformTextStyleProperties({ textDecorationLine: 'line-through' });
        expect(result).toMatchSnapshot();
    });

    it('text shadow', () => {
        const result = transformTextStyleProperties({
            textShadowColor: '#000000',
            textShadowRadius: 15,
            textShadowOffset: {
                width: 10,
                height: 20
            }
        });
        expect(result).toMatchSnapshot();
    });
});
