import * as React from 'react';
import { Page, View, Text } from 'react-figma';
import { useSelector } from 'react-redux';

export const App = () => {
    const count = useSelector((state: any) => state.counter.value);

    return (
        <Page name="New page" isCurrent>
            <View>
                <Text style={{ color: '#ff0000' }}>Count: {count}</Text>
            </View>
        </Page>
    );
};
