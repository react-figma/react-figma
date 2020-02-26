import * as React from 'react';
import * as yoga from 'yoga-layout-prebuilt';
import { createFigma, createParentPostMessage } from 'figma-api-stub';
import { render, subscribeOnMessages, uiWorker, View } from '../..';
import { wait } from '../../helpers/wait';
import { removeNodeBatchId } from '../../helpers/removeNodeBatchId';

const waitYoga = async () => {
    await wait();
    await wait();
    await wait();
};

describe('Yoga layout integration', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
        // @ts-ignore
        global.parent.postMessage = createParentPostMessage(global.figma, true);

        figma.ui.onmessage = message => {
            subscribeOnMessages(message);
        };

        const handler = uiWorker({ yoga });

        // @ts-ignore
        global.onmessage = event => {
            handler(event);
        };
    });

    it('render single component', async () => {
        render(
            <View>
                <View style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <View style={{ width: 200, height: 100, backgroundColor: '#ff0017' }} />
            </View>,
            figma.currentPage
        );
        await waitYoga();
        expect(removeNodeBatchId(figma.root)).toMatchSnapshot();
        expect(figma.root.children['0'].children['0'].height).toEqual(200);
        expect(figma.root.children['0'].children['0'].children['1'].y).toEqual(100);
    });
});
