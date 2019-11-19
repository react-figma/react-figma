import * as React from 'react';
import { Frame, Page, Rectangle, Text, Component, StyleSheet } from '../../../src';

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
            <Text characters={'Space'} style={styles.heading} />

            <Component name="SizingXSmall" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 8, height: 8 }]} />
            </Component>
            <Text characters={'X-Small'} style={styles.sizingDescription} />
            <Text characters="8px" style={styles.hint} />

            <Component name="SizingSmall" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 16, height: 16 }]} />
            </Component>
            <Text characters={'Small'} style={styles.sizingDescription} />
            <Text characters="16px" style={styles.hint} />

            <Component name="SizingMedium" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 24, height: 24 }]} />
            </Component>
            <Text characters={'Medium'} style={styles.sizingDescription} />
            <Text characters="24px" style={styles.hint} />

            <Component name="SizingLarge" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 44, height: 44 }]} />
            </Component>
            <Text characters={'Large'} style={styles.sizingDescription} />
            <Text characters="44px" style={styles.hint} />

            <Component name="SizingXLarge" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 64, height: 64 }]} />
            </Component>
            <Text characters={'X-Large'} style={styles.sizingDescription} />
            <Text characters="64px" style={styles.hint} />
        </Frame>
    );
};

const TypeFrame = props => {
    return (
        <Frame name="Type" style={[styles.frame, props.style]}>
            <Text characters={'Type'} style={styles.heading} />

            <Component name="HeaderH1" style={styles.component}>
                <Text characters={'Header 1'} style={{ fontSize: 64 }} />
            </Component>
            <Text characters="64px" style={styles.hint} />

            <Component name="HeaderH2" style={styles.component}>
                <Text characters={'Header 2'} style={{ fontSize: 44 }} />
            </Component>
            <Text characters="44px" style={styles.hint} />

            <Component name="HeaderH3" style={styles.component}>
                <Text characters={'Heading 3'} style={{ fontSize: 24 }} />
            </Component>
            <Text characters="24px" style={styles.hint} />

            <Component name="HeaderH4" style={styles.component}>
                <Text characters={'HEADER 4'} style={{ fontSize: 16 }} />
            </Component>
            <Text characters="16px" style={styles.hint} />

            <Component name="RegularText" style={styles.component}>
                <Text characters={'Regular text'} style={{ fontSize: 16 }} />
            </Component>
            <Text characters="16px" style={styles.hint} />

            <Component name="SmallText" style={styles.component}>
                <Text characters={'Small text'} style={{ fontSize: 14 }} />
            </Component>
            <Text characters="14px" style={styles.hint} />

            <Component name="XSmallText" style={styles.component}>
                <Text characters={'X-Small text'} style={{ fontSize: 11 }} />
            </Component>
            <Text characters="11px" style={styles.hint} />
        </Frame>
    );
};

const IconsFrame = props => {
    return (
        <Frame name="Icons" style={[styles.frame, props.style]}>
            <Text characters={'Icons'} style={styles.heading} />

            <Component name="IconFacebook" style={styles.component}>
                <Rectangle style={[styles.icon, { backgroundImage: facebookIcon }]} />
            </Component>
            <Component name="IconTwitter" style={styles.component}>
                <Rectangle style={[styles.icon, { backgroundImage: twitterIcon }]} />
            </Component>
            <Component name="IconWhatsapp" style={styles.component}>
                <Rectangle style={[styles.icon, { backgroundImage: whatsappIcon }]} />
            </Component>
            <Component name="IconSkype" style={styles.component}>
                <Rectangle style={[styles.icon, { backgroundImage: skypeIcon }]} />
            </Component>
            <Component name="IconYoutube" style={styles.component}>
                <Rectangle style={[styles.icon, { backgroundImage: youtubeIcon }]} />
            </Component>
            <Component name="IconInstagram" style={styles.component}>
                <Rectangle style={[styles.icon, { backgroundImage: instagramIcon }]} />
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
