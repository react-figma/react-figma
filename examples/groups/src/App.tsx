import * as React from 'react';
import { Page, Rectangle, Group, Text, Frame } from '../../../src';

export const App = () => {
    return (
        <Page isCurrent name="New page">
            <Group
                name="Button"
                style={{
                    backgroundColor: '#12ff00',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text characters="ButtonButtonButtonButtonButton" />
                <Text characters="Button" />
            </Group>
        </Page>
    );
};
