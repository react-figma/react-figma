import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import { useFontName } from '../useFontName';

describe('useFontName', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('useFontName searching matched fontName style', async () => {
        const callback = jest.fn();
        // @ts-ignore
        figma.listAvailableFontsAsync = jest.fn(() => {
            return Promise.resolve([
                {
                    fontName: {
                        family: 'Inter',
                        style: 'Regular'
                    }
                },
                {
                    fontName: {
                        family: 'Inter',
                        style: 'Semi Bold'
                    }
                },
                {
                    fontName: {
                        family: 'Inter',
                        style: 'Bold'
                    }
                }
            ]);
        });
        const Component = () => {
            const loadedFont = useFontName({ family: 'Inter', style: 'SemiBold' });
            if (!loadedFont) {
                return null;
            }
            callback(loadedFont);
            return null;
        };
        await render(<Component />);
        await wait();
        expect(callback).toHaveBeenCalledWith({ family: 'Inter', style: 'Semi Bold' });
    });
});
