import * as React from 'react';
import { Rectangle, Page } from 'react-figma';

const App = () => {
    return (
        <Page>
            <Rectangle
                style={{
                    width: 200,
                    height: 100,
                    borderWidth: 10,
                    borderColor: '#29c2ff',
                    shadowColor: '#000000',
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                }}
            />
        </Page>
    );
};

// This type of export is preferred,
// it allows to inspect component's name in React DevTools
// instead of 'Anonymous'
export { App };
