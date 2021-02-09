import * as React from 'react';
import { Page, View, Text, createPaintStyle } from 'react-figma';

const paintStyle = createPaintStyle(
    {
        backgroundColor: '#dd55aa'
    },
    {
        name: 'background/color'
    }
);

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View>
                <View style={{ width: 200, height: 100, ...paintStyle }} />
                <Text style={{ color: '#ffffff' }}>text</Text>
            </View>
        </Page>
    );
};
