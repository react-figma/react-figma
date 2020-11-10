import * as React from 'react';
import { Page, View, Text } from 'react-figma';
const { MDXProvider } = require('@mdx-js/react');
import Test from './test.mdx';

const components = {
    h1: ({ children }) => <Text style={{ fontFamily: 'Roboto', fontSize: 32 }}>{children}</Text>,
    p: ({ children }) => <Text style={{ fontFamily: 'Roboto', fontSize: 16 }}>{children}</Text>
};

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View>
                <MDXProvider components={components}>
                    <Test />
                </MDXProvider>
            </View>
        </Page>
    );
};
