import * as React from 'react';
import { Frame, Page, Rectangle, Text } from '../../../src';

export const App = () => {
    return (
        <Page name="Design system">
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
            <Text characters={'text1'} />
        </Page>
    );
};
