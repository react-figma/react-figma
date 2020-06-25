import * as React from 'react';
import { Page, View } from 'react-figma';
import { Spring } from 'react-spring/renderprops-universal';

export const App = () => {
    const [clicked, setClicked] = React.useState(false);
    return (
        <Page name="New page" isCurrent>
            <Spring
                to={{
                    left: clicked ? 0 : 500,
                }}>
                {(props) => (
                    <View
                        style={[{ backgroundColor: '#ff00ff' }, props]}
                        onSelectionEnter={() => {
                            setClicked(!clicked);
                        }}
                        onSelectionLeave={() => {
                            setClicked(!clicked);
                        }}></View>
                )}
            </Spring>
        </Page>
    );
};
