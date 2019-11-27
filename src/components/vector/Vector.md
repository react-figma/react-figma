## Vector

Wrapper for Figma [Vector](https://www.figma.com/plugin-docs/api/VectorNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `vectorPaths` | [VectorPath](https://www.figma.com/plugin-docs/api/VectorPath/) |         |  |
| `vectorNetwork` | [VectorNetwork](https://www.figma.com/plugin-docs/api/VectorNetwork/) |         |  |
| `handleMirroring` | [HandleMirroring](https://www.figma.com/plugin-docs/api/HandleMirroring/) |         |  |
| `style`    | [`Style`](/docs/styling.md)   |         | Not all props                                                 |

Also, most of [VectorNode](https://www.figma.com/plugin-docs/api/VectorNode/) fields supported as props.

#### Example

```javascript
<Line
    name="line"
    strokeWeight={4}
    strokeAlign="CENTER"
    opacity={0.5}
    strokes={[{ type: 'SOLID', color: { r: 1, g: 0, b: 1 } }]}
    strokeCap="ROUND"
    dashPattern={[2, 10, 2, 10]}
/>
```
