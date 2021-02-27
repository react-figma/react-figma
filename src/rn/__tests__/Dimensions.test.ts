import { Dimensions } from '../Dimensions';

describe('Dimensions', () => {
    it('width, height is number', () => {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;

        expect(typeof windowWidth).toBe('number');
        expect(typeof windowHeight).toBe('number');
    });

    it('set and addEventListener works', () => {
        const handler = jest.fn();

        Dimensions.addEventListener('change', handler);
        Dimensions.set({
            window: {
                fontScale: 1,
                height: 200,
                scale: 1,
                width: 300
            }
        });

        expect(handler).toBeCalledTimes(1);
        expect(handler).toBeCalledWith({
            window: {
                fontScale: 1,
                height: 200,
                scale: 1,
                width: 300
            }
        });
        expect(Dimensions.get('window').width).toEqual(300);
        expect(Dimensions.get('window').height).toEqual(200);
    });

    it('removeEventListener works', () => {
        const handler = jest.fn();

        Dimensions.addEventListener('change', handler);
        Dimensions.removeEventListener('change', handler);
        Dimensions.set({
            window: {
                fontScale: 1,
                height: 200,
                scale: 1,
                width: 300
            }
        });

        expect(handler).toBeCalledTimes(0);
    });
});
