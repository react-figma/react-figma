import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../../renderer';
import { Page, useCurrentPageChange } from '../Page';
import { wait } from '../../../helpers/wait';

describe('Page', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('useCurrentPageChange', async () => {
        const onCurrentPageChange = jest.fn();
        const page = figma.createPage();
        const Component = () => {
            useCurrentPageChange({ current: page }, onCurrentPageChange);
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
