import * as React from 'react';
import {renderer} from '../../../src/';
import {App} from "./App";
import {subscribeOnMessages} from "../../../src/helpers/messagePromise";

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

(async () => {
    await renderer(
        <App />
    );
    figma.closePlugin();
})();
