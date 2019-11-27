## Rectangle

Wrapper for the Figma [Rectangle](https://www.figma.com/plugin-docs/api/RectangleNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `top` | `Number` |  |  |
| `left` | `Number` |  |  |
| `width` | `Number` |  |  |
| `height` | `Number` |  |  |
| `style`    | [`Style`](/docs/styling.md)   |  | Not all props 

Also, most of the [RectangleNode](https://www.figma.com/plugin-docs/api/RectangleNode/) fields are supported as props.

#### Example

```javascript
<Rectangle
    height={100}
    width={200}
/>
```
