import * as React from 'react';
import { Page, Frame, StyleSheet, Text, useFetch } from 'react-figma';

const styles = StyleSheet.create({
    frame: {
        padding: 50
    },
    text: {
        marginTop: 50,
        fontSize: 48,
        fontFamily: 'Roboto',
        minWidth: 500
    }
});

export const App = () => {
    const { isLoading, data } = useFetch(`https://swapi.co/api/people/1`);

    return (
        <Page isCurrent>
            <Frame style={styles.frame}>
                <Text style={styles.text}>{`isLoading: ${(isLoading && 'true') || 'false'}`}</Text>
                <Text style={styles.text}>{`Name: ${data && data.name}`}</Text>
            </Frame>
        </Page>
    );
};
