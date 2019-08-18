import * as React from 'react';
import { renderer } from '../../../src/';
import { App } from './App';

(async () => {
    await renderer(<App />);
    figma.closePlugin();
})();
