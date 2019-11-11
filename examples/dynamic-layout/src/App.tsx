import * as React from 'react';
import { Page, Rectangle, Group, Frame } from '../../../src';

const frameProps = {
    style: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        background: '#ffffff'
    }
};

export const App = () => {
    const [rectangles, setRectangles] = React.useState([]);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setRectangles(rectangles =>
                rectangles.length < 10
                    ? [
                          ...rectangles,
                          {
                              width: 64,
                              height: 64,
                              backgroundColor: '#C4C4C4',
                              marginLeft: rectangles.length === 0 ? 0 : 10
                          }
                      ]
                    : rectangles
            );
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Page isCurrent name="New page">
            <Frame {...frameProps}>
                {rectangles.map((rectangle, id) => {
                    return <Rectangle key={id} style={rectangle} />;
                })}
            </Frame>
        </Page>
    );
};
