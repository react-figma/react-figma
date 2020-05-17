import * as React from 'react';
import '../../../src/rpc';
import { uiApi } from '../../../src/rpc';

figma.showUI(__html__, { visible: false });

// TODO move to core package
figma.on('currentpagechange', () => {
    const tempId = figma.currentPage.getPluginData('tempId');
    uiApi.currentPageChange(tempId);
});
