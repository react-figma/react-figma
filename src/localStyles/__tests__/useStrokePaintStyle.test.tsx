import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import { useStrokePaintStyle } from '../useStrokePaintStyle';
import { View } from '../../components/view/View';
import { Page } from '../../components/page/Page';
import { removeNodeBatchId } from '../../helpers/removeNodeBatchId';
import { removeTempId } from '../../helpers/removeTempId';

const removeMeta = node => {
    return removeNodeBatchId(removeTempId(node));
};

jest.mock('nanoid');
import { nanoid } from 'nanoid';

describe('useStrokePaintStyle', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('useStrokePaintStyle correctly applied', async () => {
        // @ts-ignore
        nanoid.mockReturnValue('test');
        const Component = () => {
            const rootStrokeStyle = useStrokePaintStyle(
                {
                    backgroundColor: '#76ff1c',
                    borderColor: '#ffffff',
                    borderWidth: 5
                } as any,
                {
                    name: 'root/background'
                }
            );
            return <View style={rootStrokeStyle} />;
        };
        await render(
            <Page>
                <Component />
            </Page>
        );
        await wait();
        expect(removeMeta(figma.root)).toMatchSnapshot();
        expect(figma.getLocalPaintStyles()).toMatchSnapshot();
    });
});
