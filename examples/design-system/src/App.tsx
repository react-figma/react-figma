import * as React from 'react';
import { CurrentPage, Frame, Page, Rectangle, Text } from '../../../src';

export const App = () => {
    return (
        <Page name="Design system" style={{ flexDirection: 'row' }}>
            <Frame name="Sizing">
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0ddd25' }} />
            </Frame>
            <Frame name="Fonts" style={{ marginLeft: 50 }}>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#a6dd00' }} />
            </Frame>
        </Page>
    );
};
