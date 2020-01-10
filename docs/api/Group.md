---
id: group
title: Group
---

Wrapper for the Figma [group](https://www.figma.com/plugin-docs/api/figma/#group).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling)   |         | Not all props                                                 |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |

Also, most of the [FrameNode](https://www.figma.com/plugin-docs/api/FrameNode/) fields are supported as props.

#### Example

```jsx
<Group name="Comp">
  <Text>Hello world!</Text>
</Component>
```
