import * as React from 'react';
import { Page, Rectangle, Group } from '../../../src';

export const App = () => {
    return (
        <Page isCurrent name="New page">
            <Group name="1">
                <Rectangle name="1.1" style={{ width: 200, height: 100, backgroundColor: '#f24e1e' }} />
            </Group>
            <Rectangle name="2" style={{ width: 200, height: 100, backgroundColor: '#ff7262' }} />
            <Group name="3">
                <Group name="3.1">
                    <Rectangle name="3.1.1" style={{ width: 200, height: 100, backgroundColor: '#a259ff' }} />
                    <Rectangle name="3.1.2" style={{ width: 200, height: 100, backgroundColor: '#1abcfe' }} />
                </Group>
                <Rectangle name="3.2" style={{ width: 200, height: 100, backgroundColor: '#0000ff' }} />
                <Group name="3.3">
                    <Rectangle name="3.3.1" style={{ width: 200, height: 100, backgroundColor: '#0acf83' }} />
                    <Rectangle name="3.3.2" style={{ width: 200, height: 100, backgroundColor: '#ffffff' }} />
                </Group>
            </Group>
        </Page>
    );
};
