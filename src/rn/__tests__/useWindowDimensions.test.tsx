import { Dimensions } from '../Dimensions';
import { useWindowDimensions } from '../useWindowDimensions';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import * as React from 'react';
import { createFigma } from 'figma-api-stub';

describe('useWindowDimensions', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('returns width, height', async () => {
        const callback = jest.fn();
        Dimensions.set({
            window: {
                fontScale: 1,
                height: 200,
                scale: 1,
                width: 300
            }
        });

        const Component = () => {
            const { width, height } = useWindowDimensions();
            React.useEffect(() => {
                callback(width, height);
            }, [width, height]);
            return null;
        };

        await render(<Component />);
        await wait();
        await wait();
        await wait();
        await wait();
        expect(callback).toHaveBeenCalledWith(300, 200);
    });
});
