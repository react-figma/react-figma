import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Image } from '../Image';
import { createFigma } from 'figma-api-stub';

describe('<Image />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true,
        });
    });

    it('Image with source and layout style properties', () => {
        const tree = renderer
            .create(
                <Image
                    source="./image.png"
                    style={{
                        width: 100,
                        height: 200,
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Image with resizeMode prop', () => {
        const tree = renderer
            .create(
                <Image
                    source="./image.png"
                    resizeMode="stretch"
                    style={{
                        width: 100,
                        height: 200,
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
