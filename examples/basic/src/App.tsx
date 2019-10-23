import * as React from 'react';
import { Page, Rectangle, Group } from '../../../src';
import { YogaContextProvider } from '../../../src/hooks/useYogaLayout';

export const App = () => {
    const yogaRootRef = React.useRef();
    return (
        <YogaContextProvider yogaRef={yogaRootRef}>
            <Page yogaRef={yogaRootRef} name="New page">
                {/*<Group>*/}
                <Group>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ffff00' }} />
                </Group>
                <Group>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#FF0000' }} />
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0000ff' }} />
                </Group>
                {/*</Group>*/}
            </Page>
        </YogaContextProvider>
    );
};
