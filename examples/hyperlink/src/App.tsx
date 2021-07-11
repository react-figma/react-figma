import * as React from 'react';
import { Page, View, Text } from 'react-figma';
import { useState } from 'react';

export const App = () => {
    const [nodeId, setNodeId] = useState();
    console.log('nodeIdRef.current', nodeId);
    return (
        <Page name="New page" isCurrent>
            <View>
                <Text
                    style={{ color: '#308eff', marginBottom: 50 }}
                    hyperlink={{
                        type: 'URL',
                        value: 'https://react-figma.dev/'
                    }}>
                    React Figma website
                </Text>
                {nodeId && (
                    <Text
                        style={{ color: '#308eff', marginBottom: 50 }}
                        hyperlink={{
                            type: 'NODE',
                            value: nodeId
                        }}>
                        Rectangle link
                    </Text>
                )}
                <View onNodeId={setNodeId}>
                    <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                </View>
            </View>
        </Page>
    );
};
