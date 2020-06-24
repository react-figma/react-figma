import { transformBorderStyleProperties } from '../transformBorderProperties';

describe('transformBorderProperties', () => {
    it('borderRadius', () => {
        const result = transformBorderStyleProperties({ borderRadius: 5 });
        expect(result).toMatchSnapshot();
    });

    it('borderTopLeftRadius', () => {
        const result = transformBorderStyleProperties({ borderTopLeftRadius: 5 });
        expect(result).toMatchSnapshot();
    });

    it('borderTopRightRadius', () => {
        const result = transformBorderStyleProperties({ borderTopRightRadius: 5 });
        expect(result).toMatchSnapshot();
    });

    it('borderBottomLeftRadius', () => {
        const result = transformBorderStyleProperties({ borderBottomLeftRadius: 5 });
        expect(result).toMatchSnapshot();
    });

    it('borderBottomRightRadius', () => {
        const result = transformBorderStyleProperties({ borderBottomRightRadius: 5 });
        expect(result).toMatchSnapshot();
    });
    it('borderColor', () => {
        const result = transformBorderStyleProperties({ borderColor: '#ffffff' });
        expect(result).toMatchSnapshot();
    });
    it('borderWidth', () => {
        const result = transformBorderStyleProperties({ borderWidth: 2 });
        expect(result).toMatchSnapshot();
    });
});
