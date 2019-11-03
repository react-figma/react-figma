import * as React from 'react';
import { Ellipse } from '../../../src';

export const App = () => {
    return (
        <Ellipse
            style={{ width: 200, height: 200, backgroundColor: '#c4c4c4' }}
            arcData={{ startingAngle: 0, endingAngle: -Math.PI, innerRadius: 0.5 }}
        />
    );
};
