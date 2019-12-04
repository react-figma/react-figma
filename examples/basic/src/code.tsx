import * as React from 'react';
import { render, subscribeOnMessages } from '../../../src/';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

render(<App />, figma.currentPage);
