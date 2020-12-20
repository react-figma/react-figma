import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import { useImageHash } from '../useImageHash';
import fetchMock from 'jest-fetch-mock';

describe('useImageHash', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });

        // @ts-ignore
        global.figma.createImage = () => {
            return {
                hash: '<image hash>'
            };
        };

        // @ts-ignore
        global.FileReader = () => {
            const obj: any = {
                readAsDataURL: () => {},
                readAsArrayBuffer: () => {}
            };

            setTimeout(() => {
                obj.result = '<test hash>';
                if (obj.onloadend) {
                    obj.onloadend();
                }
                if (obj.onload) {
                    obj.onload();
                }
            });

            return obj;
        };
    });

    it('useImageHash for remote URL', async () => {
        const callback = jest.fn();
        fetchMock
            .once(
                'data:image/png;base64,iVBORw0KGgoAAA\n' +
                    'ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4\n' +
                    '//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU\n' +
                    '5ErkJggg=='
            )
            .once('test hash 1');
        const Component = () => {
            const imageHash = useImageHash('https://avatars1.githubusercontent.com/u/54585419');
            if (imageHash) {
                callback(imageHash);
            }
            return null;
        };
        await render(<Component />);
        await wait();
        await wait();
        await wait();
        await wait();
        expect(callback).toHaveBeenCalledWith('<image hash>');
    });

    it('useImageHash for local URL', async () => {
        const callback = jest.fn();
        fetchMock.once('test hash 1');
        const Component = () => {
            const imageHash = useImageHash(
                'data:image/png;base64,iVBORw0KGgoAAA\n' +
                    'ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4\n' +
                    '//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU\n' +
                    '5ErkJggg=='
            );
            if (imageHash) {
                callback(imageHash);
            }
            return null;
        };
        await render(<Component />);
        await wait();
        await wait();
        expect(callback).toHaveBeenCalledWith('<image hash>');
    });
});
