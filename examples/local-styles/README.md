# Local Styles

The example demonstrates a local styles supporting. The [Doc](https://react-figma.dev/docs/local-styles).

Demo:

<p align="center"><img src="https://media.giphy.com/media/tjAzOZUcX2Z9XwbxQ6/giphy.gif" width="480"></p>

Code example:

```javascript
import * as React from 'react';
import { Page, View, Text, StyleSheet, useFillPaintStyle, useStrokePaintStyle, useTextStyle } from 'react-figma';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#76ff1c',
        borderColor: '#ffffff',
        borderWidth: 5
    },
    heading: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000000'
    }
});

export const App = () => {
    const rootFillStyle = useFillPaintStyle(styles.root, {
        name: 'root/background'
    });

    const rootStrokeStyle = useStrokePaintStyle(styles.root, {
        name: 'root/border'
    });

    const headingTextStyle = useTextStyle(styles.heading, {
        name: 'heading'
    });

    return (
        <Page name="New page" isCurrent>
            <View>
                <View style={{ width: 200, height: 100, ...styles.root, ...rootFillStyle, ...rootStrokeStyle }} />
                <Text style={{ ...headingTextStyle }}>Local styles</Text>
            </View>
        </Page>
    );
};                                                                                    
```

[How to run](../../contributing.md#running-examples)

