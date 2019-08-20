import * as React from 'react';
import { Page, Rectangle } from '../../../src';
export const App = () => {
    return React.createElement(
        Page,
        { name: 'Page X' },
        React.createElement(Rectangle, { style: { width: 200, height: 100, backgroundColor: '#0ddd25' } }),
        React.createElement(Rectangle, { style: { width: 200, height: 100, backgroundColor: '#a6dd00' } })
    );
};
