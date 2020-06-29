import * as React from 'react';
const renderer = require('react-test-renderer');
import { Vector } from '../Vector';
import { createFigma } from 'figma-api-stub';

describe('<Vector />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true,
        });
    });

    it('Vector without props', () => {
        const tree = renderer.create(<Vector />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Vector that draws a triangle', () => {
        const tree = renderer
            .create(
                <Vector
                    vectorNetwork={{
                        // The vertices of the triangle
                        vertices: [
                            { x: 0, y: 100 },
                            { x: 100, y: 100 },
                            { x: 50, y: 0 },
                        ],

                        // The edges of the triangle.
                        segments: [
                            {
                                start: 0,
                                end: 1,
                            },
                            {
                                start: 1,
                                end: 2,
                            },
                            {
                                start: 2,
                                end: 0,
                            },
                        ],

                        // The loop that forms the triangle. Each loop is a
                        // sequence of indices into the segments array.
                        regions: [{ windingRule: 'NONZERO', loops: [[0, 1, 2]] }],
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
