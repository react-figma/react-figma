# Text

Wrapper for Figma [Text](https://www.figma.com/plugin-docs/api/TextNode/).
`Text` component supports auto loading fonts defined through `fontFamily`, `fontWeight`, `fontStyle` prop. 

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `String` |         | Text content                                      |
| `style`    | [`Style`](/docs/styling.md#type-styles)   |         |                  |

Also, most of [TextNode](https://www.figma.com/plugin-docs/api/TextNode/) fields supported as props.

#### Example

```javascript
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
