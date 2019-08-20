import * as React from 'react';
import { Page, Rectangle } from '../../../src';
// @ts-ignore
import testImage from './test_image.jpg';
export const App = () => {
    return React.createElement(
        Page,
        { name: 'Page X' },
        React.createElement(Rectangle, {
            style: {
                width: 200,
                height: 100,
                backgroundColor: '#0ddd25',
                backgroundImage: testImage,
                backgroundSize: 'FIT'
            }
        }),
        React.createElement(Rectangle, {
            style: {
                width: 200,
                height: 100,
                backgroundColor: '#025'
            }
        })
    );
};
