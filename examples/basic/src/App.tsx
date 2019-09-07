import * as React from 'react';
import { Frame, Page, Rectangle, Text } from '../../../src';

export const App = () => {
    const [color, setColor] = React.useState('#12ff00');
    console.log('color', color);

    React.useEffect(() => {
        setTimeout(() => {
            setColor('#ff0001');
        }, 100);
    }, []);

    return (
        <Page name="Design system">
            <Rectangle style={{ width: 200, height: 100, backgroundColor: color }} />
        </Page>
    );
};
