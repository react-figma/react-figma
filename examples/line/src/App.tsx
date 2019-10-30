import * as React from 'react';
import { Line } from '../../../src';

export const App = () => {
    return (
        <Line
            name="line"
            strokeWeight={4}
            strokeAlign="CENTER"
            opacity={0.5}
            strokes={[{ type: 'SOLID', color: { r: 1, g: 0, b: 1 } }]}
            strokeCap="ROUND"
            dashPattern={[2, 10, 2, 10]}
        />
    );
};
