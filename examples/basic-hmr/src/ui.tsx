import * as React from 'react';
import '../../../src/rpc';
import { render } from '../../../src';
import { App } from './App';

render(<App />);

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}
