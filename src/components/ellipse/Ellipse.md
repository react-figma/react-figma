## Ellipse

Wrapper for the Figma [Ellipse](https://www.figma.com/plugin-docs/api/EllipseNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `arcData`  | [ArcData](https://www.figma.com/plugin-docs/api/ArcData/) |         |  |
| `style`    | [`Style`](/docs/styling.md)   |         | Not all props                                                 |

Also, most of the [EllipseNode](https://www.figma.com/plugin-docs/api/EllipseNode/) fields are supported as props.

#### Example

```javascript
<Ellipse
    style={{ width: 200, height: 200, backgroundColor: '#c4c4c4' }}
    arcData={{ startingAngle: 0, endingAngle: -Math.PI, innerRadius: 0.5 }}
/>
```
