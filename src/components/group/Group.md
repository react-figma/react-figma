## Group

Wrapper for Figma [group](https://www.figma.com/plugin-docs/api/figma/#group).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling.md)   |         | Not all props                                                 |

Also, most of [FrameNode](https://www.figma.com/plugin-docs/api/FrameNode/) fields supported as props.

#### Example

```javascript
<Group name="Comp">
  <Text>Hello world!</Text>
</Component>
```
