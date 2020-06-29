import { transformGeometryStyleProperties } from '../transformGeometryStyleProperties';

describe('transformGeometryStyleProperties', () => {
    it('backgroundColor: "red"', () => {
        const result = transformGeometryStyleProperties('fills', { backgroundColor: 'red' });
        expect(result).toMatchSnapshot();
    });

    it('backgroundImage: ./image.png', () => {
        const result = transformGeometryStyleProperties('fills', { backgroundImage: './image.png' });
        expect(result).toMatchSnapshot();
    });

    it('backgroundImage: linear-gradient(#e66465, #9198e5)', () => {
        const result = transformGeometryStyleProperties('fills', {
            backgroundImage: 'linear-gradient(#e66465, #9198e5)',
        });
        expect(result).toMatchSnapshot();
    });
});
