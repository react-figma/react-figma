import * as React from 'react';
import {renderer} from '../../../src/';
import {App} from "./App";

figma.showUI(__html__, { visible: false });

(async () => {
    await renderer(
        <App />
    );
    figma.closePlugin();
})();
