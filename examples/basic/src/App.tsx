import * as React from 'react';
import { Rectangle } from '../../../src';

const App = () => {
    return (
        <Rectangle
            style={{
                width: 200,
                height: 100,
                borderWidth: 10,
                borderColor: '#ff8b29',
                shadowColor: '#000000',
                shadowOpacity: 0.5,
                shadowRadius: 10,
                shadowOffset: {
                    width: 10,
                    height: 10
                }
            }}
        />
    );
};

// This type of export is preferred,
// it allows to inspect component's name in React DevTools
// instead of 'Anonymous'
export { App };
