import * as React from 'react';
import { Page, View } from '../../../src';

export const App = () => {
    return (
        <Page name="New page">
            <View name="1">
                <View name="1.1" style={{ width: 200, height: 100, backgroundColor: '#f24e1e' }} />
            </View>
            <View name="2" style={{ width: 200, height: 100, backgroundColor: '#ff7262' }} />
            <View name="3">
                <View name="3.1">
                    <View name="3.1.1" style={{ width: 200, height: 100, backgroundColor: '#a259ff' }} />
                    <View name="3.1.2" style={{ width: 200, height: 100, backgroundColor: '#1abcfe' }} />
                </View>
                <View name="3.2" style={{ width: 200, height: 100, backgroundColor: '#0000ff' }} />
                <View name="3.3">
                    <View name="3.3.1" style={{ width: 200, height: 100, backgroundColor: '#0acf83' }} />
                    <View name="3.3.2" style={{ width: 200, height: 100, backgroundColor: '#ffffff' }} />
                </View>
            </View>
        </Page>
    );
};
