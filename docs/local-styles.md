---
id: local-styles
title: Local Styles
---

React Figma provides access to [Figma Styles API](https://www.figma.com/plugin-docs/api/figma/#styles) through a hooks API.

#### useFillPaintStyle

The `useFillPaintStyle` hook creates (or updates) [PaintStyle](https://www.figma.com/plugin-docs/api/PaintStyle/)
and returns an object that contains `fillStyleId` and can be consumed in `style` prop. 

| Args       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `style`     | [`Style`](/docs/styling) Object | | The `style` will applied to a local style |
| `params` | `Object` |  |  |
| `params.id` | `String` |  | A style id |
| `params.name` | `String` |  | A style name |
| `params.description` | `String` |  | A style description |

#### useStrokePaintStyle

The `useStrokePaintStyle` hook creates (or updates) [PaintStyle](https://www.figma.com/plugin-docs/api/PaintStyle/)
and returns an object that contains `strokeStyleId` and can be consumed in `style` prop.

| Args       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `style`     | [`Style`](/docs/styling) Object | | The `style` will applied to a local style |
| `params` | `Object` |  |  |
| `params.id` | `String` |  | A style id |
| `params.name` | `String` |  | A style name |
| `params.description` | `String` |  | A style description |

#### useTextStyle

The `useTextStyle` hook creates (or updates) [TextStyle](https://www.figma.com/plugin-docs/api/TextStyle/)
and returns an object that contains `textStyleId` and can be consumed in `style` prop.

| Args       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `style`     | [`Style`](/docs/styling) Object | | The `style` will applied to a local style |
| `params` | `Object` |  |  |
| `params.id` | `String` |  | A style id |
| `params.name` | `String` |  | A style name |
| `params.description` | `String` |  | A style description |

#### Notes

* Local styles hooks tried to find a style by `name` or `id`.
    * Creates a new style if can't find
* Not all style props can be assigned to local style
* It's possible to use existing styles, you can pass an empty style object.

#### Example

```jsx
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

