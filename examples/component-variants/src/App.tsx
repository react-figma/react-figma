import * as React from 'react';
import { Page, View, Text, ComponentSet, Component, StyleSheet } from 'react-figma';

const styles = StyleSheet.create({
    base: {
        paddingLeft: 25,
        paddingRight: 25,
        height: 52,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 20
    },
    textBlack: {
        color: '#000'
    },
    textWhite: {
        color: '#fff'
    },
    primary: {
        backgroundColor: '#000'
    },
    dangerous: {
        backgroundColor: '#eb212e'
    },
    secondary: {
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#fff'
    },
    setContainer: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

const PrimaryButton = (props: { text: string }) => {
    const { text } = props;
    return (
        <View style={[styles.base, styles.primary]}>
            <Text style={[styles.text, styles.textWhite]}>{text}</Text>
        </View>
    );
};

const DangerousButton = (props: { text: string }) => {
    const { text } = props;
    return (
        <View style={[styles.base, styles.dangerous]}>
            <Text style={[styles.text, styles.textWhite]}>{text}</Text>
        </View>
    );
};

const SecondaryButton = (props: { text: string }) => {
    const { text } = props;
    return (
        <View style={[styles.base, styles.secondary]}>
            <Text style={[styles.text, styles.textBlack]}>{text}</Text>
        </View>
    );
};

export const App = () => {
    return (
        <Page name="Buttons" isCurrent>
            <ComponentSet
                name="Button"
                style={styles.setContainer}
                description="ComponentSet"
                documentationLinks={[{ uri: 'https://react-figma.dev/docs/api/component#componentset' }]}>
                <Component
                    name="variant=Primary"
                    style={{ marginRight: 30 }}
                    description="Component"
                    documentationLinks={[{ uri: 'https://react-figma.dev/docs/api/component' }]}>
                    <PrimaryButton text="Primary" />
                </Component>
                <Component
                    name="variant=Dangerous"
                    style={{ marginRight: 30 }}
                    description="Component"
                    documentationLinks={[{ uri: 'https://react-figma.dev/docs/api/component' }]}>
                    <DangerousButton text="Dangerous" />
                </Component>
                <Component
                    name="variant=Secondary"
                    description="Component"
                    documentationLinks={[{ uri: 'https://react-figma.dev/docs/api/component' }]}>
                    <SecondaryButton text="Secondary" />
                </Component>
            </ComponentSet>
        </Page>
    );
};
