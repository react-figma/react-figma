import * as React from 'react';
import { createComponent, Frame, Page, Rectangle, Text } from '../../../src';

const Rect = createComponent();

const Txt = createComponent();

export const App = () => {
    return (
        <Page isCurrent name="Basic">
            <Frame style={{ flexDirection: 'column' }}>
                <Rect.Component name="rect-component">
                    <Rectangle
                        name="rect"
                        style={{
                            width: 200,
                            height: 100,
                            borderWidth: 10,
                            borderColor: '#ff8b29',
                            shadowColor: '#000000',
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            shadowOffset: {
                                width: 10,
                                height: 10
                            }
                        }}
                    />
                </Rect.Component>
                <Rect.Instance style={{ marginTop: 20, width: '100%' }} />
                <Rect.Instance
                    style={{ marginTop: 20, width: '100%' }}
                    overrides={{
                        rect: {
                            style: {
                                borderColor: '#07ff00'
                            }
                        }
                    }}
                />
                <Txt.Component name="text-component" style={{ width: '100%' }}>
                    <Text name="text" style={{ marginTop: 20, fontSize: 24, width: '100%' }}>
                        Some text
                    </Text>
                </Txt.Component>
                {/*<Txt.Instance style={{ marginTop: 20 }} overrides={{
                    "text": {
                        characters: "Overrided text"
                    }
                }} />*/}
            </Frame>
        </Page>
    );
};
