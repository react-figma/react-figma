import * as React from 'react';
const renderer = require('react-test-renderer');
import { Slice } from '../Slice';
import { createFigma } from 'figma-api-stub';

describe('<Slice />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('Slice without props', () => {
        const tree = renderer.create(<Slice />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Slice with layout style properties', () => {
        const tree = renderer
            .create(
                <Slice
                    style={{
                        width: 100,
                        height: 200,
                        top: 50,
                        left: 20
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
