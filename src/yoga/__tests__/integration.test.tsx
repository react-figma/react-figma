import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { Page, render, View } from '../..';
import { wait } from '../../helpers/wait';
import { removeNodeBatchId } from '../../helpers/removeNodeBatchId';
import { removeTempId } from '../../helpers/removeTempId';
import '../../rpc';

const removeMeta = (node) => {
    return removeNodeBatchId(removeTempId(node));
};

describe('Yoga layout integration', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true,
        });
    });

    it('render single component', async () => {
        await render(
            <Page>
                <View>
                    <View style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                    <View style={{ width: 200, height: 100, backgroundColor: '#ff0017' }} />
                </View>
            </Page>
        );
        await wait();
        await wait();
        expect(removeMeta(figma.root)).toMatchSnapshot();
        expect(figma.root.children['1'].children['0'].height).toEqual(200);
        expect(figma.root.children['1'].children['0'].children['1'].y).toEqual(100);
    });
});
