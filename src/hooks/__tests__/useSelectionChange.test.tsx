import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { useSelectionChange } from '../useSelectionChange';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';

describe('useSelectionChange', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('onSelectionEnter triggered', async () => {
        const node = figma.createRectangle();
        const onSelectionEnter = jest.fn();
        const Component = () => {
            useSelectionChange({ current: node }, { onSelectionEnter });
            return null;
        };
        render(<Component />, figma.currentPage);
        await wait();
        figma.currentPage.selection = [node];
        await wait();
        expect(onSelectionEnter).toHaveBeenCalledTimes(1);
    });

    it('onSelectionLeave triggered', async () => {
        const node = figma.createRectangle();
        const onSelectionEnter = jest.fn();
        const onSelectionLeave = jest.fn();
        const Component = () => {
            useSelectionChange({ current: node }, { onSelectionEnter, onSelectionLeave });
            return null;
        };
        render(<Component />, figma.currentPage);
        await wait();
        figma.currentPage.selection = [node];
        await wait();
        figma.currentPage.selection = [];
        await wait();
        expect(onSelectionEnter).toHaveBeenCalledTimes(1);
        expect(onSelectionLeave).toHaveBeenCalledTimes(1);
    });

    it("handlers doesn't applied when haven't onSelectionEnter, onSelectionLeave", async () => {
        const node = figma.createRectangle();
        figma.on = jest.fn().mockImplementation(figma.on);
        const Component = () => {
            useSelectionChange({ current: node }, {});
            return null;
        };
        render(<Component />, figma.currentPage);
        await wait();
        expect(figma.on).toHaveBeenCalledTimes(0);
    });

    it('handlers applied when have onSelectionEnter or onSelectionLeave', async () => {
        const node = figma.createRectangle();
        figma.on = jest.fn().mockImplementation(figma.on);
        const onSelectionEnter = jest.fn();
        const onSelectionLeave = jest.fn();

        const Component = () => {
            useSelectionChange({ current: node }, { onSelectionEnter, onSelectionLeave });
            return null;
        };
        render(<Component />, figma.currentPage);
        await wait();
        expect(figma.on).toHaveBeenCalledTimes(1);
    });
});
