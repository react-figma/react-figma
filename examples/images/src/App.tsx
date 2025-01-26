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
    },
    largeLogo: {
        width: 90,
        height: 90
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
            <Text>Image component with a local SVG:</Text>
            <Image style={styles.largeLogo} source={require('./logo.svg')} />
            <Text>Image component with a remote SVG:</Text>
            <Image
                style={styles.largeLogo}
                source={{
                    uri:
                        'https://raw.githubusercontent.com/react-figma/react-figma/dfa655881c7944a8ec76ef9758c92a480ae27959/logo.svg'
                }}
            />
        </Page>
    );
};
