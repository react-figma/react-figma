import * as React from 'react';
import { Page, Rectangle, Text } from '../../../src';

export const App = () => {
    return (
        <Page>
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
            <Text characters="test" />
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
        </Page>
    );
};
