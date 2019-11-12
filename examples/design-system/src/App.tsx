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
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
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
    }
});

const SpaceFrame = () => {
    const sizingDescriptionProps = {
        fontSize: 8,
        style: { marginTop: 4 }
    };
    const sizingHintProps = {
        fontSize: 6,
        style: {
            marginTop: 2,
            color: '#a0a0a0'
        }
    };
    return (
        <Frame name="Space" style={styles.frame}>
            <Text characters={'Space'} fontSize={14} />

            <Component name="SizingXSmall" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 8, height: 8 }]} />
            </Component>
            <Text characters={'X-Small'} {...sizingDescriptionProps} />
            <Text characters="8px" {...sizingHintProps} />

            <Component name="SizingSmall" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 16, height: 16 }]} />
            </Component>
            <Text characters={'Small'} {...sizingDescriptionProps} />
            <Text characters="16px" {...sizingHintProps} />

            <Component name="SizingMedium" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 24, height: 24 }]} />
            </Component>
            <Text characters={'Medium'} {...sizingDescriptionProps} />
            <Text characters="24px" {...sizingHintProps} />

            <Component name="SizingLarge" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 44, height: 44 }]} />
            </Component>
            <Text characters={'Large'} {...sizingDescriptionProps} />
            <Text characters="44px" {...sizingHintProps} />

            <Component name="SizingXLarge" style={styles.component}>
                <Rectangle style={[styles.sizingBlock, { width: 64, height: 64 }]} />
            </Component>
            <Text characters={'X-Large'} {...sizingDescriptionProps} />
            <Text characters="64px" {...sizingHintProps} />
        </Frame>
    );
};

const TypeFrame = props => {
    const textHintProps = {
        fontSize: 6,
        style: {
            marginTop: 2,
            color: '#a0a0a0'
        }
    };
    return (
        <Frame name="Type" style={[styles.frame, props.style]}>
            <Text characters={'Type'} fontSize={14} />

            <Component name="HeaderH1" style={styles.component}>
                <Text characters={'Header 1'} fontSize={64} />
            </Component>
            <Text characters="64px" {...textHintProps} />

            <Component name="HeaderH2" style={styles.component}>
                <Text characters={'Header 2'} fontSize={44} />
            </Component>
            <Text characters="44px" {...textHintProps} />

            <Component name="HeaderH3" style={styles.component}>
                <Text characters={'Heading 3'} fontSize={24} />
            </Component>
            <Text characters="24px" {...textHintProps} />

            <Component name="HeaderH4" style={styles.component}>
                <Text characters={'HEADER 4'} fontSize={16} />
            </Component>
            <Text characters="16px" {...textHintProps} />

            <Component name="RegularText" style={styles.component}>
                <Text characters={'Regular text'} fontSize={16} />
            </Component>
            <Text characters="16px" {...textHintProps} />

            <Component name="SmallText" style={styles.component}>
                <Text characters={'Small text'} fontSize={14} />
            </Component>
            <Text characters="14px" {...textHintProps} />

            <Component name="XSmallText" style={styles.component}>
                <Text characters={'X-Small text'} fontSize={11} />
            </Component>
            <Text characters="11px" {...textHintProps} />
        </Frame>
    );
};

const IconsFrame = props => {
    return (
        <Frame name="Icons" style={[styles.frame, props.style]}>
            <Text characters={'Icons'} fontSize={14} />

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
