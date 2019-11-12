import * as React from 'react';
import { Rectangle } from '../../../src';

export const App = () => {
    return (
        <Rectangle
            style={{
                width: 200,
                height: 100,
                borderWidth: 10,
                borderColor: '#ff8b29'
            }}
        />
    );
};
