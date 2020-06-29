import * as React from 'react';
import { Page, View, Text } from 'react-figma';

export const App = () => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setVisible(prev => !prev);
            console.log('tick');
        }, 500);
    });
    return (
        <Page name="New page" isCurrent>
            <View name="container" onLayout={console.log}>
                <View style={{ width: 1, height: 1, backgroundColor: '#dd55aa' }} name="inner" />
                {visible && <Text style={{ color: '#ffffff' }}>text</Text>}
            </View>
        </Page>
    );
};
