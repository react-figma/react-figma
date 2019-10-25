import * as React from 'react';
import { Page, Rectangle, Text, ErrorBoundary, Vector } from '../../../src';

export const App = () => {
    return (
        <Vector
            vectorNetwork={{
                // The vertices of the triangle
                vertices: [{ x: 0, y: 100 }, { x: 100, y: 100 }, { x: 50, y: 0 }],

                // The edges of the triangle. The index refers to the vertices array.
                segments: [
                    {
                        start: 0,
                        end: 1
                    },
                    {
                        start: 1,
                        end: 2
                    },
                    {
                        start: 2,
                        end: 0
                    }
                ],

                // The loop that forms the triangle. Each loop is a
                // sequence of indices into the segments array.
                regions: [{ windingRule: 'NONZERO', loops: [[0, 1, 2]] }]
            }}
            style={{ backgroundColor: '#ff0000' }}
        />
    );
};
