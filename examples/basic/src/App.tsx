import * as React from 'react';
import { Component, Frame, Page, Rectangle, Text } from '../../../src';
import * as instagramIcon from '../../design-system/src/icons/011-instagram.png';
import { YogaContextProvider } from '../../../src/hooks/useYogaLayout';

export const App = () => {
    const yogaRootRef = React.useRef();
    return (
        <YogaContextProvider yogaRef={yogaRootRef}>
            <Page yogaRef={yogaRootRef} name="New page" style={{ display: 'flex', flexDirection: 'row' }}>
                <Frame name="frame" style={{ display: 'flex' }}>
                    <Text characters={'Icons'} fontSize={14} />

                    <Component name="comp">
                        <Rectangle style={{ width: 16, height: 16, backgroundImage: instagramIcon }} />
                    </Component>
                </Frame>

                <Frame name="frame2" style={{ display: 'flex', marginLeft: 50 }}>
                    <Text characters={'Space'} fontSize={14} />

                    <Component name="comp2">
                        <Rectangle style={{ width: 50, height: 50, backgroundColor: '#12ff00' }} />
                    </Component>
                </Frame>
            </Page>
        </YogaContextProvider>
    );
};
