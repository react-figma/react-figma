import * as React from 'react';
import { Page, Rectangle } from '../../../src';

export const App = () => {
    return (
        <Page name="New page">
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
        </Page>
    );
};
