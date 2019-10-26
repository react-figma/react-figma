import * as React from 'react';
import { Page, Rectangle, Group } from '../../../src';
import { YogaContextProvider } from '../../../src';

export const App = () => {
    const yogaRootRef = React.useRef();
    return (
        <YogaContextProvider yogaRef={yogaRootRef}>
            <Page yogaRef={yogaRootRef} name="New page">
                <Group name="1">
                    <Rectangle name="1.1" style={{ width: 200, height: 100, backgroundColor: '#f1f2f6' }} />
                </Group>
                <Rectangle name="2" style={{ width: 200, height: 100, backgroundColor: '#00ff00' }} />
                <Group name="3">
                    <Group name="3.1">
                        <Rectangle name="3.1.1" style={{ width: 200, height: 100, backgroundColor: '#f0ff00' }} />
                        <Rectangle name="3.1.2" style={{ width: 200, height: 100, backgroundColor: '#ff0f00' }} />
                    </Group>
                    <Rectangle name="3.2" style={{ width: 200, height: 100, backgroundColor: '#0000ff' }} />
                    <Group name="3.3">
                        <Rectangle name="3.3.1" style={{ width: 200, height: 100, backgroundColor: '#ff0000' }} />
                        <Rectangle name="3.3.2" style={{ width: 200, height: 100, backgroundColor: '#fffff0' }} />
                    </Group>
                </Group>
            </Page>
        </YogaContextProvider>
    );
};
