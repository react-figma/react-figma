import * as React from 'react';
import { Frame, Page, Rectangle, Text, Component } from '../../../src';

import * as facebookIcon from './icons/001-facebook.png';
import * as twitterIcon from './icons/002-twitter.png';
import * as whatsappIcon from './icons/003-whatsapp.png';
import * as skypeIcon from './icons/006-skype.png';
import * as youtubeIcon from './icons/008-youtube.png';
import * as instagramIcon from './icons/011-instagram.png';
import { YogaContextProvider } from '../../../src/hooks/useYogaLayout';

const frameProps = {
    style: { paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10 }
};

const SpaceFrame = () => {
    const componentStyles = {
        style: {
            marginTop: 10
        }
    };
    const sizingStyles = {
        backgroundColor: '#C4C4C4'
    };
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
        <Frame name="Space" {...frameProps}>
            <Text characters={'Space'} fontSize={14} />

            <Component name="SizingXSmall" {...componentStyles}>
                <Rectangle style={{ width: 8, height: 8, ...sizingStyles }} />
            </Component>
            <Text characters={'X-Small'} {...sizingDescriptionProps} />
            <Text characters="8px" {...sizingHintProps} />

            <Component name="SizingSmall" {...componentStyles}>
                <Rectangle style={{ width: 16, height: 16, ...sizingStyles }} />
            </Component>
            <Text characters={'Small'} {...sizingDescriptionProps} />
            <Text characters="16px" {...sizingHintProps} />

            <Component name="SizingMedium" {...componentStyles}>
                <Rectangle style={{ width: 24, height: 24, ...sizingStyles }} />
            </Component>
            <Text characters={'Medium'} {...sizingDescriptionProps} />
            <Text characters="24px" {...sizingHintProps} />

            <Component name="SizingLarge" {...componentStyles}>
                <Rectangle style={{ width: 44, height: 44, ...sizingStyles }} />
            </Component>
            <Text characters={'Large'} {...sizingDescriptionProps} />
            <Text characters="44px" {...sizingHintProps} />

            <Component name="SizingXLarge" {...componentStyles}>
                <Rectangle style={{ width: 64, height: 64, ...sizingStyles }} />
            </Component>
            <Text characters={'X-Large'} {...sizingDescriptionProps} />
            <Text characters="64px" {...sizingHintProps} />
        </Frame>
    );
};

const TypeFrame = props => {
    const componentStyles = {
        style: {
            marginTop: 10
        }
    };
    const textHintProps = {
        fontSize: 6,
        style: {
            marginTop: 2,
            color: '#a0a0a0'
        }
    };
    return (
        <Frame name="Type" style={{ ...frameProps.style, ...props.style }}>
            <Text characters={'Type'} fontSize={14} />

            <Component name="HeaderH1" {...componentStyles}>
                <Text characters={'Header 1'} fontSize={64} />
            </Component>
            <Text characters="64px" {...textHintProps} />

            <Component name="HeaderH2" {...componentStyles}>
                <Text characters={'Header 2'} fontSize={44} />
            </Component>
            <Text characters="44px" {...textHintProps} />

            <Component name="HeaderH3" {...componentStyles}>
                <Text characters={'Heading 3'} fontSize={24} />
            </Component>
            <Text characters="24px" {...textHintProps} />

            <Component name="HeaderH4" {...componentStyles}>
                <Text characters={'HEADER 4'} fontSize={16} />
            </Component>
            <Text characters="16px" {...textHintProps} />

            <Component name="RegularText" {...componentStyles}>
                <Text characters={'Regular text'} fontSize={16} />
            </Component>
            <Text characters="16px" {...textHintProps} />

            <Component name="SmallText" {...componentStyles}>
                <Text characters={'Small text'} fontSize={14} />
            </Component>
            <Text characters="14px" {...textHintProps} />

            <Component name="XSmallText" {...componentStyles}>
                <Text characters={'X-Small text'} fontSize={11} />
            </Component>
            <Text characters="11px" {...textHintProps} />
        </Frame>
    );
};

const IconsFrame = props => {
    const componentStyle = {
        style: {
            marginTop: 10
        }
    };
    const iconStyle = {
        width: 16,
        height: 16,
        backgroundColor: '#ffffff',
        backgroundSize: 'FIT'
    };
    return (
        <Frame name="Icons" style={{ ...frameProps.style, ...props.style }}>
            <Text characters={'Icons'} fontSize={14} />

            <Component name="IconFacebook" {...componentStyle}>
                <Rectangle
                    style={{
                        ...iconStyle,
                        backgroundImage: facebookIcon
                    }}
                />
            </Component>
            <Component name="IconTwitter" {...componentStyle}>
                <Rectangle
                    style={{
                        ...iconStyle,
                        backgroundImage: twitterIcon
                    }}
                />
            </Component>
            <Component name="IconWhatsapp" {...componentStyle}>
                <Rectangle
                    style={{
                        ...iconStyle,
                        backgroundImage: whatsappIcon
                    }}
                />
            </Component>
            <Component name="IconSkype" {...componentStyle}>
                <Rectangle
                    style={{
                        ...iconStyle,
                        backgroundImage: skypeIcon
                    }}
                />
            </Component>
            <Component name="IconYoutube" {...componentStyle}>
                <Rectangle
                    style={{
                        ...iconStyle,
                        backgroundImage: youtubeIcon
                    }}
                />
            </Component>
            <Component name="IconInstagram" {...componentStyle}>
                <Rectangle
                    style={{
                        ...iconStyle,
                        backgroundImage: instagramIcon
                    }}
                />
            </Component>
        </Frame>
    );
};

export const App = () => {
    const yogaRootRef = React.useRef();
    return (
        <YogaContextProvider yogaRef={yogaRootRef}>
            <Page yogaRef={yogaRootRef} name="Design system" style={{ flexDirection: 'row' }}>
                <SpaceFrame />
                <TypeFrame style={{ marginLeft: 50 }} />
                <IconsFrame style={{ marginLeft: 50 }} />
            </Page>
        </YogaContextProvider>
    );
};
