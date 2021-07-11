import * as React from 'react';
import { Page, View, Text } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View>
                <Text
                    style={{ color: '#308eff' }}
                    hyperlink={{
                        type: 'URL',
                        value: 'https://react-figma.dev/'
                    }}>
                    React Figma website
                </Text>
            </View>
        </Page>
    );
};
