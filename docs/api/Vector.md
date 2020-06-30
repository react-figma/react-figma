---
id: vector
title: Vector
---

Wrapper for the Figma [Vector](https://www.figma.com/plugin-docs/api/VectorNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `vectorPaths` | [VectorPath](https://www.figma.com/plugin-docs/api/VectorPath/) |         |  |
| `vectorNetwork` | [VectorNetwork](https://www.figma.com/plugin-docs/api/VectorNetwork/) |         |  |
| `handleMirroring` | [HandleMirroring](https://www.figma.com/plugin-docs/api/HandleMirroring/) |         |  |
| `style`    | [`Style`](/docs/styling)   |         | Not all props                                                 |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |
| `onLayout` | `Function` |  | Event is fired once the layout has been calculated  |

Also, most of the [VectorNode](https://www.figma.com/plugin-docs/api/VectorNode/) fields are supported as props.

#### Example

```jsx
<Vector
    vectorNetwork={{
        // The vertices of the triangle
        vertices: [{ x: 0, y: 100 }, { x: 100, y: 100 }, { x: 50, y: 0 }],

        // The edges of the triangle. The index refers to the vertices array.
        segments: [
            {
                start: 0,
                end: 1
            },
            {
                start: 1,
                end: 2
            },
            {
                start: 2,
                end: 0
            }
        ],

        // The loop that forms the triangle. Each loop is a
        // sequence of indices into the segments array.
        regions: [{ windingRule: 'NONZERO', loops: [[0, 1, 2]] }]
    }}
    style={{ backgroundColor: '#ff0000' }}
/>
```
