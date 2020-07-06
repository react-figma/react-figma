---
id: text
title: Text
---

Analog of `Text` component at [React Native](https://facebook.github.io/react-native/docs/text), 
[React Sketchapp](http://airbnb.io/react-sketchapp/docs/API.html#text). 
Wrapper for Figma [Text](https://www.figma.com/plugin-docs/api/TextNode/).
`Text` component supports autoloading fonts defined through `fontFamily`, `fontWeight`, `fontStyle` props. 

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `String` |         | Text content                                      |
| `style`    | [`Style`](/docs/styling#type-styles)   |         |                  |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |
| `onLayout` | `Function` |  | Event is fired once the layout has been calculated  |

Also, most of the [TextNode](https://www.figma.com/plugin-docs/api/TextNode/) fields supported as props.

#### Example

```jsx
<Text
  style={{
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: '#01ffae',
  }}
>
  Hello World!
</Text>
```
