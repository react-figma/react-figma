import * as React from 'react';
import { Page, Rectangle } from '../../../src';

// @ts-ignore
import testImage from './test_image.jpg';

export const App = () => {
    return (
        <Page name="Page X">
            <Rectangle
                style={{
                    width: 200,
                    height: 100,
                    backgroundColor: '#0ddd25',
                    backgroundImage: testImage,
                    backgroundSize: 'FIT'
                }}
            />
            <Rectangle
                style={{
                    width: 200,
                    height: 100,
                    backgroundColor: '#025'
                }}
            />
        </Page>
    );
};
