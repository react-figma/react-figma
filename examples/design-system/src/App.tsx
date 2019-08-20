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

const TypeFrame = props => {
    const textStyles = {
        marginTop: 10
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

            <Text characters={'Header 1'} fontSize={64} {...textStyles} />
            <Text characters="64px" {...textHintProps} />

            <Text characters={'Header 2'} fontSize={44} {...textStyles} />
            <Text characters="44px" {...textHintProps} />

            <Text characters={'Heading 3'} fontSize={24} {...textStyles} />
            <Text characters="24px" {...textHintProps} />

            <Text characters={'HEADER 4'} fontSize={16} {...textStyles} />
            <Text characters="16px" {...textHintProps} />

            <Text characters={'Regular text'} fontSize={16} {...textStyles} />
            <Text characters="16px" {...textHintProps} />

            <Text characters={'Small text'} fontSize={14} {...textStyles} />
            <Text characters="14px" {...textHintProps} />

            <Text characters={'X-Small text'} fontSize={11} {...textStyles} />
            <Text characters="11px" {...textHintProps} />
        </Frame>
    );
};

export const App = () => {
    return (
        <Page name="Design system" style={{ flexDirection: 'row' }}>
            <SpaceFrame />
            <TypeFrame style={{ marginLeft: 50 }} />
        </Page>
    );
};
