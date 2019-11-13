import * as React from 'react';
import { Page, Svg } from '../../../src';
import * as reactIcon from './React-icon.svg';

export const App = () => {
    return (
        <Page isCurrent name="New page">
            <Svg source={reactIcon} style={{ width: 300, height: 212 }} />
        </Page>
    );
};
