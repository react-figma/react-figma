import * as React from 'react';
import { Page, View, Text, StyleSheet } from 'react-figma';
const { MDXProvider } = require('@mdx-js/react');
import Hello from './hello.mdx';

const styles = StyleSheet.create({
    h1: {
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    p: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: 8
    },
    color: {
        width: 32,
        height: 32,
        marginRight: 16
    },
    row: {
        marginTop: 24,
        flexDirection: 'row'
    }
});

const Color = props => {
    const { value } = props;
    return <View style={[styles.color, { backgroundColor: value }]} />;
};

const Row = props => {
    const { children } = props;
    return <View style={styles.row}>{children}</View>;
};

const components = {
    h1: ({ children }) => <Text style={styles.h1}>{children}</Text>,
    p: ({ children }) => <Text style={styles.p}>{children}</Text>,
    Color,
    Row
};

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View>
                <MDXProvider components={components}>
                    <Hello />
                </MDXProvider>
            </View>
        </Page>
    );
};
