import * as React from 'react';
import { Page, View } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View
                layoutMode="VERTICAL"
                paddingLeft={20}
                paddingRight={20}
                paddingTop={20}
                paddingBottom={20}
                itemSpacing={10}
                style={{
                    backgroundColor: '#ffffff',
                    width: 200
                }}>
                <View style={{ height: 40, backgroundColor: '#ffaa97' }} layoutAlign="STRETCH" />
                <View style={{ height: 40, backgroundColor: '#ffaa97', marginTop: 10 }} layoutAlign="STRETCH" />
                <View style={{ width: 80, height: 40, backgroundColor: '#ffaa97', marginTop: 10 }} />
            </View>
        </Page>
    );
};
