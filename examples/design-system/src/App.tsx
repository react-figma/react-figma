import * as React from 'react';
import { CurrentPage, Frame, Page, Rectangle, Text } from '../../../src';

const frameProps = {
    style: { paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10 }
};

const SpaceFrame = () => {
    const sizingStyles = {
        backgroundColor: '#C4C4C4',
        marginTop: 10
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

            <Rectangle style={{ width: 8, height: 8, ...sizingStyles }} />
            <Text characters={'X-Small'} {...sizingDescriptionProps} />
            <Text characters="8px" {...sizingHintProps} />

            <Rectangle style={{ width: 16, height: 16, ...sizingStyles }} />
            <Text characters={'Small'} {...sizingDescriptionProps} />
            <Text characters="16px" {...sizingHintProps} />

            <Rectangle style={{ width: 24, height: 24, ...sizingStyles }} />
            <Text characters={'Medium'} {...sizingDescriptionProps} />
            <Text characters="24px" {...sizingHintProps} />

            <Rectangle style={{ width: 44, height: 44, ...sizingStyles }} />
            <Text characters={'Large'} {...sizingDescriptionProps} />
            <Text characters="44px" {...sizingHintProps} />

            <Rectangle style={{ width: 64, height: 64, ...sizingStyles }} />
            <Text characters={'X-Large'} {...sizingDescriptionProps} />
            <Text characters="64px" {...sizingHintProps} />
        </Frame>
    );
};

export const App = () => {
    return (
        <Page name="Design system" style={{ flexDirection: 'row' }}>
            <SpaceFrame />
            <Frame name="Fonts" style={{ marginLeft: 50 }}>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#a6dd00' }} />
            </Frame>
        </Page>
    );
};
