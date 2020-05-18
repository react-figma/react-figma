import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../../renderer';
import { Page, useCurrentPageChange } from '../Page';
import { wait } from '../../../helpers/wait';
import { uiApi } from '../../../rpc';

describe('Page', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });

        figma.on('currentpagechange', () => {
            const reactId = figma.currentPage.getPluginData('reactId');
            uiApi.currentPageChange(reactId);
        });
    });

    it('useCurrentPageChange', async () => {
        const onCurrentPageChange = jest.fn();
        const page = figma.createPage();
        page.setPluginData('reactId', '111');
        const Component = () => {
            useCurrentPageChange({ current: { reactId: '111' } }, onCurrentPageChange);
            return null;
        };
        await render(<Component />);
        await wait();
        figma.currentPage = page;
        await wait();
        expect(onCurrentPageChange).toHaveBeenCalledTimes(1);
        expect(onCurrentPageChange).toHaveBeenCalledWith(true);
    });
});
