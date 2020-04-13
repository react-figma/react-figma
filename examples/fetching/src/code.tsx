import * as React from 'react';
import { render, subscribeOnUIMessages } from '../../../src/';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnUIMessages(message);
};

render(<App />, figma.root);
