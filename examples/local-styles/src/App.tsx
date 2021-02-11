import * as React from 'react';
import { Page, View, Text, StyleSheet, useFillPaintStyle, useStrokePaintStyle } from 'react-figma';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#76ff1c',
        borderColor: '#ffffff',
        borderWidth: 5
    }
});

export const App = () => {
    const rootFillStyle = useFillPaintStyle(styles.root, {
        name: 'root/background'
    });

    const rootStrokeStyle = useStrokePaintStyle(styles.root, {
        name: 'root/border'
    });

    return (
        <Page name="New page" isCurrent>
            <View>
                <View style={{ width: 200, height: 100, ...styles.root, ...rootFillStyle, ...rootStrokeStyle }} />
                <Text style={{ color: '#ffffff' }}>text</Text>
            </View>
        </Page>
    );
};
