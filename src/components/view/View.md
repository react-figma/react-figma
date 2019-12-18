# View

Analog of `View` component at [React Native](https://facebook.github.io/react-native/docs/view), [React Sketchapp](http://airbnb.io/react-sketchapp/docs/API.html#view).
The most fundamental component for building a UI. 
Component renders Figma group node if it has children, rectangle node otherwise.

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling.md)   |         | Supports can be different depends on `children`     |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |

Also, supports fields of [FrameNode](https://www.figma.com/plugin-docs/api/FrameNode/) as props if has children, 
supports fields of [RectangleNode](https://www.figma.com/plugin-docs/api/RectangleNode/) as props if has no children.

#### Examples

```javascript
<View style={{width: 200, height: 100, backgroundColor: "red"}} />
```

was displayed as rectangle. 

```javascript
<View>
    <Text>Hello world!</Text>
</View>
```

was displayed as group with nested text node. 
