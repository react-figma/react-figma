import * as React from 'react';
import { Page, Frame, Text, StyleSheet, Image } from 'react-figma';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    logo: {
        width: 66,
        height: 58
    }
});

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <Text>Image component with a local source:</Text>
            <Image style={styles.tinyLogo} source={require('./logo.png')} />
            <Text>Frame component with background image:</Text>
            <Frame style={[styles.tinyLogo, { backgroundImage: require('./logo.png') }]} />
            <Text>Image component with a remote source:</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://avatars1.githubusercontent.com/u/54585419'
                }}
            />
        </Page>
    );
};
