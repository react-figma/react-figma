import * as React from 'react';
import { Page, View, Text, StyleSheet, usePaintStyle } from 'react-figma';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#dd55aa'
    }
});

export const App = () => {
    const paintStyle = usePaintStyle(styles.root, {
        name: 'background/color'
    });

    return (
        <Page name="New page" isCurrent>
            <View>
                <View style={{ width: 200, height: 100, ...paintStyle }} />
                <Text style={{ color: '#ffffff' }}>text</Text>
            </View>
        </Page>
    );
};
