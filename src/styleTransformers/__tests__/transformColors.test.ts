import { colorToPaint, colorToRGB, colorToRGBA } from '../transformColors';

describe('transformColors', () => {
    it('colorToRGB #9b9fff', () => {
        const result = colorToRGB('#9b9fff');
        expect(result).toMatchSnapshot();
    });

    it('colorToRGB #ff0000', () => {
        const result = colorToRGB('#ff0000');
        expect(result).toMatchSnapshot();
    });

    it('colorToRGBA #ff0000 0.5', () => {
        const result = colorToRGBA('#ff0000', 0.5);
        expect(result).toMatchSnapshot();
    });

    it('colorToRGB red', () => {
        const result = colorToRGB('red');
        expect(result).toMatchSnapshot();
    });

    it('colorToRGB aliceblue', () => {
        const result = colorToRGB('aliceblue');
        expect(result).toMatchSnapshot();
    });

    it('colorToRGB rgb(255, 0, 255)', () => {
        const result = colorToRGB('rgb(255, 0, 255)');
        expect(result).toMatchSnapshot();
    });

    it('colorToRGB rgba(255, 255, 255, 1.0)', () => {
        const result = colorToRGB('rgba(255, 255, 255, 1.0)');
        expect(result).toMatchSnapshot();
    });

    it('colorToRGB #ff00ff00', () => {
        const result = colorToRGB('#ff00ff00');
        expect(result).toMatchSnapshot();
    });

    it('colorToRGB transparent', () => {
        const result = colorToRGB('transparent');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint #9b9fff', () => {
        const result = colorToPaint('#9b9fff');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint linear-gradient(#e66465, #9198e5)', () => {
        const result = colorToPaint('linear-gradient(#e66465, #9198e5)');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint linear-gradient(to left, #e66465, #9198e5)', () => {
        const result = colorToPaint('linear-gradient(to left, #e66465, #9198e5)');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint linear-gradient(to right, #e66465, #9198e5)', () => {
        const result = colorToPaint('linear-gradient(to right, #e66465, #9198e5)');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint linear-gradient(to top, #e66465, #9198e5)', () => {
        const result = colorToPaint('linear-gradient(to top, #e66465, #9198e5)');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint linear-gradient(to bottom, #e66465, #9198e5)', () => {
        const result = colorToPaint('linear-gradient(to bottom, #e66465, #9198e5)');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint linear-gradient(30deg, #e66465, #9198e5)', () => {
        const result = colorToPaint('linear-gradient(30deg, #e66465, #9198e5)');
        expect(result).toMatchSnapshot();
    });

    it('colorToPaint with percentage: linear-gradient(#e66465, #9198e5 80%)', () => {
        const result = colorToPaint('linear-gradient(#e66465, #9198e5 80%)');
        expect(result).toMatchSnapshot();
    });
});
