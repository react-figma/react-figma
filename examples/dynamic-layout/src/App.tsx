import * as React from 'react';
import { Page, Rectangle, StyleSheet, Frame } from 'react-figma';

const styles = StyleSheet.create({
    frame: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    }
});

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
            <Frame style={styles.frame}>
                {rectangles.map((rectangle, id) => {
                    return <Rectangle key={id} style={rectangle} />;
                })}
            </Frame>
        </Page>
    );
};
