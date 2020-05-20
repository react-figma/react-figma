import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { useSelectionChange } from '../useSelectionChange';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import { uiApi } from '../../rpc';

describe('useSelectionChange', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });

        figma.on('selectionchange', () => {
            const reactIds = figma.currentPage.selection.map(node => node.getPluginData('reactId'));
            uiApi.selectionChange(reactIds);
        });
    });

    it('onSelectionEnter triggered', async () => {
        const node = figma.createRectangle();
        node.setPluginData('reactId', '222');
        const onSelectionEnter = jest.fn();
        const Component = () => {
            useSelectionChange({ current: { reactId: '222' } }, { onSelectionEnter });
            return null;
        };
        await render(<Component />);
        await wait();
        figma.currentPage.selection = [node];
        await wait();
        await wait();
        expect(onSelectionEnter).toHaveBeenCalledTimes(1);
    });

    it('onSelectionLeave triggered', async () => {
        const node = figma.createRectangle();
        node.setPluginData('reactId', '111');
        const onSelectionEnter = jest.fn();
        const onSelectionLeave = jest.fn();
        const Component = () => {
            useSelectionChange({ current: { reactId: '111' } }, { onSelectionEnter, onSelectionLeave });
            return null;
        };
        await render(<Component />);
        await wait();
        figma.currentPage.selection = [node];
        await wait();
        figma.currentPage.selection = [];
        await wait();
        expect(onSelectionEnter).toHaveBeenCalledTimes(1);
        expect(onSelectionLeave).toHaveBeenCalledTimes(1);
    });
});
