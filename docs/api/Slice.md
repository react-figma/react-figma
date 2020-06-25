---
id: slice
title: Slice
---

Wrapper for the Figma [Slice](https://www.figma.com/plugin-docs/api/SliceNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `width` | `Number` |  |  |
| `height` | `Number` |  |  |
| `style`    | [`Style`](/docs/styling)   |  | Not all props |

Also, most of the [SliceNode](https://www.figma.com/plugin-docs/api/SliceNode/) fields are supported as props.

#### Example

```jsx
<Slice
    height={200}
    width={200}
/>
```
