import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import { Text } from '../../components/text/Text';
import { View } from '../../components/view/View';
import { Page } from '../../components/page/Page';
import { removeNodeBatchId } from '../../helpers/removeNodeBatchId';
import { removeTempId } from '../../helpers/removeTempId';

const removeMeta = node => {
    return removeNodeBatchId(removeTempId(node));
};

jest.mock('nanoid');
import { nanoid } from 'nanoid';
import { useStyleByKey } from '../useStyleByKey';

describe('useStyleByKey', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
        // @ts-ignore
        global.figma.importStyleByKeyAsync = jest.fn().mockReturnValue({ id: 'testStyleId' });
    });

    it('useTextStyle correctly applied', async () => {
        // @ts-ignore
        nanoid.mockReturnValue('test');
        const ViewComponent = () => {
            const fillStyle = useStyleByKey('testStyleId');
            return (
                <View
                    style={{
                        fillStyleId: fillStyle && fillStyle.id
                    }}
                />
            );
        };
        const TextComponent = () => {
            const textStyle = useStyleByKey('testStyleId');
            return (
                <Text
                    style={{
                        textStyleId: textStyle && textStyle.id
                    }}
                />
            );
        };
        await render(
            <Page>
                <ViewComponent />
                <TextComponent />
            </Page>
        );
        await wait();
        // @ts-ignore
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });
});
