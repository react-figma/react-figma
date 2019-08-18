import * as React from 'react';
import {renderer} from '../../../src/';
import {App} from "./App";

figma.showUI(__html__)

figma.ui.onmessage = (message) => {
    console.log("got this from the UI", message)
}

(async () => {
    await renderer(
        <App />
    );
})();
