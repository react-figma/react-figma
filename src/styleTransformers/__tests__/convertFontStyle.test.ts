import { convertFontStyle } from '../converFontStyle';

describe('convertFontStyle', () => {
    it('empty', () => {
        const result = convertFontStyle();
        expect(result).toEqual('Regular');
    });

    it('normal, normal', () => {
        const result = convertFontStyle('normal', 'normal');
        expect(result).toEqual('Regular');
    });

    it('700', () => {
        const result = convertFontStyle('700');
        expect(result).toEqual('Bold');
    });
    it('700 as number', () => {
        const result = convertFontStyle(700, 'italic');
        expect(result).toEqual('Bold Italic');
    });

    it('normal, italic', () => {
        const result = convertFontStyle('normal', 'italic');
        expect(result).toEqual('Italic');
    });

    it('bold, normal', () => {
        const result = convertFontStyle('bold', 'normal');
        expect(result).toEqual('Bold');
    });

    it('bold, italic', () => {
        const result = convertFontStyle('bold', 'italic');
        expect(result).toEqual('Bold Italic');
    });
});
