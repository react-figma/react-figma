import * as React from 'react';
import { Page, Frame, StyleSheet, Text } from 'react-figma';
import useFetch = require('react-fetch-hook');

const styles = StyleSheet.create({
    frame: {
        padding: 50,
    },
    text: {
        marginTop: 50,
        fontSize: 48,
        fontFamily: 'Roboto',
        minWidth: 500,
    },
});

export const App = () => {
    const { isLoading, data } = useFetch(`https://reqres.in/api/users/2`);

    return (
        <Page isCurrent>
            <Frame style={styles.frame}>
                <Text style={styles.text}>{`isLoading: ${(isLoading && 'true') || 'false'}`}</Text>
                <Text style={styles.text}>{`Name: ${
                    data && data.data && `${data.data.first_name} ${data.data.last_name}`
                }`}</Text>
            </Frame>
        </Page>
    );
};
