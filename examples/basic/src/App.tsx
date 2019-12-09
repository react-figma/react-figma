import * as React from 'react';
import { createComponent, Frame, Page, Rectangle } from '../../../src';

const Rect = createComponent();

export const App = () => {
    return (
        <Page isCurrent name="Basic">
            <Frame style={{ flexDirection: 'column' }}>
                <Rect.Component name="rect-component">
                    <Rectangle
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
                <Rect.Instance style={{ marginTop: 20, width: '150px' }} />
            </Frame>
        </Page>
    );
};
