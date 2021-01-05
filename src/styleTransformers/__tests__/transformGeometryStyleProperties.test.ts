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

    it('imageHash transforms to fills', () => {
        const result = transformGeometryStyleProperties(
            'fills',
            { backgroundImage: './image.png' },
            'data:image/png;base64,iVBORw0KGgoAAA\n' +
                'ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4\n' +
                '//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU\n' +
                '5ErkJggg=='
        );
        expect(result).toMatchSnapshot();
    });

    it('backgroundImage: linear-gradient(#e66465, #9198e5)', () => {
        const result = transformGeometryStyleProperties('fills', {
            backgroundImage: 'linear-gradient(#e66465, #9198e5)'
        });
        expect(result).toMatchSnapshot();
    });
});
