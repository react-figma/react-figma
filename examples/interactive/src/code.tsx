import * as React from 'react';
import '../../../src/rpc';
import { uiApi } from '../../../src/rpc';

figma.showUI(__html__, { visible: false });

// TODO move to core package
figma.on('currentpagechange', () => {
    const reactId = figma.currentPage.getPluginData('reactId');
    uiApi.currentPageChange(reactId);
});

figma.on('selectionchange', () => {
    const reactIds = figma.currentPage.selection.map((node) => node.getPluginData('reactId'));
    uiApi.selectionChange(reactIds);
});
