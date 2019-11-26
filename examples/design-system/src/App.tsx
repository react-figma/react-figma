import * as React from 'react';
import { Frame, Page, View, Text, Component, StyleSheet } from '../../../src';

import * as facebookIcon from './icons/001-facebook.png';
import * as twitterIcon from './icons/002-twitter.png';
import * as whatsappIcon from './icons/003-whatsapp.png';
import * as skypeIcon from './icons/006-skype.png';
import * as youtubeIcon from './icons/008-youtube.png';
import * as instagramIcon from './icons/011-instagram.png';
import { ResizeMode } from '../../../src/styleTransformers/transformGeometryStyleProperties';

const styles = StyleSheet.create({
    frame: {
        padding: 10
    },
    component: {
        marginTop: 10
    },
    sizingBlock: {
        backgroundColor: '#C4C4C4'
    },
    icon: {
        width: 16,
        height: 16,
        backgroundColor: '#ffffff',
        backgroundSize: 'contain' as ResizeMode
    },
    sizingDescription: {
        fontSize: 8,
        marginTop: 4
    },
    hint: {
        fontSize: 6,
        marginTop: 2,
        color: '#a0a0a0'
    },
    heading: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontStyle: 'italic' as any,
        fontSize: 14
    }
});

const SpaceFrame = () => {
    return (
        <Frame name="Space" style={styles.frame}>
            <Text style={styles.heading}>Space</Text>

            <Component name="SizingXSmall" style={styles.component}>
                <View style={[styles.sizingBlock, { width: 8, height: 8 }]} />
            </Component>
            <Text style={styles.sizingDescription}>X-Small</Text>
            <Text style={styles.hint}>8px</Text>

            <Component name="SizingSmall" style={styles.component}>
                <View style={[styles.sizingBlock, { width: 16, height: 16 }]} />
            </Component>
            <Text style={styles.sizingDescription}>Small</Text>
            <Text style={styles.hint}>16px</Text>

            <Component name="SizingMedium" style={styles.component}>
                <View style={[styles.sizingBlock, { width: 24, height: 24 }]} />
            </Component>
            <Text style={styles.sizingDescription}>Medium</Text>
            <Text style={styles.hint}>24px</Text>

            <Component name="SizingLarge" style={styles.component}>
                <View style={[styles.sizingBlock, { width: 44, height: 44 }]} />
            </Component>
            <Text style={styles.sizingDescription}>Large</Text>
            <Text style={styles.hint}>44px</Text>

            <Component name="SizingXLarge" style={styles.component}>
                <View style={[styles.sizingBlock, { width: 64, height: 64 }]} />
            </Component>
            <Text style={styles.sizingDescription}>X-Large</Text>
            <Text style={styles.hint}>64px</Text>
        </Frame>
    );
};

const TypeFrame = props => {
    return (
        <Frame name="Type" style={[styles.frame, props.style]}>
            <Text style={styles.heading}>Type</Text>

            <Component name="HeaderH1" style={styles.component}>
                <Text style={{ fontSize: 64 }}>Header 1</Text>
            </Component>
            <Text style={styles.hint}>64px</Text>

            <Component name="HeaderH2" style={styles.component}>
                <Text style={{ fontSize: 44 }}>Header 2</Text>
            </Component>
            <Text style={styles.hint}>44px</Text>

            <Component name="HeaderH3" style={styles.component}>
                <Text style={{ fontSize: 24 }}>Heading 3</Text>
            </Component>
            <Text style={styles.hint}>24px</Text>

            <Component name="HeaderH4" style={styles.component}>
                <Text style={{ fontSize: 16 }}>HEADER 4</Text>
            </Component>
            <Text style={styles.hint}>16px</Text>

            <Component name="RegularText" style={styles.component}>
                <Text style={{ fontSize: 16 }}>Regular text</Text>
            </Component>
            <Text style={styles.hint}>16px</Text>

            <Component name="SmallText" style={styles.component}>
                <Text style={{ fontSize: 14 }}>Small text</Text>
            </Component>
            <Text style={styles.hint}>14px</Text>

            <Component name="XSmallText" style={styles.component}>
                <Text style={{ fontSize: 11 }}>X-Small text</Text>
            </Component>
            <Text style={styles.hint}>11px</Text>
        </Frame>
    );
};

const IconsFrame = props => {
    return (
        <Frame name="Icons" style={[styles.frame, props.style]}>
            <Text style={styles.heading}>Icons</Text>

            <Component name="IconFacebook" style={styles.component}>
                <View style={[styles.icon, { backgroundImage: facebookIcon }]} />
            </Component>
            <Component name="IconTwitter" style={styles.component}>
                <View style={[styles.icon, { backgroundImage: twitterIcon }]} />
            </Component>
            <Component name="IconWhatsapp" style={styles.component}>
                <View style={[styles.icon, { backgroundImage: whatsappIcon }]} />
            </Component>
            <Component name="IconSkype" style={styles.component}>
                <View style={[styles.icon, { backgroundImage: skypeIcon }]} />
            </Component>
            <Component name="IconYoutube" style={styles.component}>
                <View style={[styles.icon, { backgroundImage: youtubeIcon }]} />
            </Component>
            <Component name="IconInstagram" style={styles.component}>
                <View style={[styles.icon, { backgroundImage: instagramIcon }]} />
            </Component>
        </Frame>
    );
};

export const App = () => {
    return (
        <Page isCurrent name="Design system" style={{ flexDirection: 'row' }}>
            <SpaceFrame />
            <TypeFrame style={{ marginLeft: 50 }} />
            <IconsFrame style={{ marginLeft: 50 }} />
        </Page>
    );
};
