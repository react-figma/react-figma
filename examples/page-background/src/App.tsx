import * as React from 'react';
import { Page, View } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page" style={{ backgroundColor: '#ff0000' }}>
            <View>
                <View style={{ width: 200, height: 100, backgroundColor: '#ffffff' }} />
            </View>
        </Page>
    );
};
