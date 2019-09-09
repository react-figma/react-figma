import * as React from 'react';
import { Frame, Page, Rectangle, Text, Component } from '../../../src';

export const App = () => {
    return (
        <Page name="Design system">
            <Frame>
                <Component>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                </Component>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#00ffe4' }} />
                <Component>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff0001' }} />
                </Component>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#7000ff' }} />
            </Frame>
        </Page>
    );
};
