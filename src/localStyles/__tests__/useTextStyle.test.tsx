import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import { Text } from '../../components/text/Text';
import { Page } from '../../components/page/Page';
import { removeNodeBatchId } from '../../helpers/removeNodeBatchId';
import { removeTempId } from '../../helpers/removeTempId';

const removeMeta = node => {
    return removeNodeBatchId(removeTempId(node));
};

jest.mock('nanoid');
import { nanoid } from 'nanoid';
import { useTextStyle } from '../useTextStyle';

describe('useTextStyle', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('useTextStyle correctly applied', async () => {
        // @ts-ignore
        nanoid.mockReturnValue('test');
        const Component = () => {
            const rootStrokeStyle = useTextStyle(
                {
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    fontSize: 24,
                    color: '#000000'
                } as any,
                {
                    name: 'root/background'
                }
            );
            return <Text style={rootStrokeStyle} />;
        };
        await render(
            <Page>
                <Component />
            </Page>
        );
        await wait();
        expect(removeMeta(figma.root)).toMatchSnapshot();
        expect(figma.getLocalTextStyles()).toMatchSnapshot();
    });
});
