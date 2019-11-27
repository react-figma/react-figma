## Group

Wrapper for Figma [Group](https://www.figma.com/plugin-docs/api/GroupNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling.md)   |         | Not all props                                                 |

Also, most of [GroupNode](https://www.figma.com/plugin-docs/api/GroupNode/) fields supported as props.

#### Example

```javascript
<Group name="Comp">
  <Text>Hello world!</Text>
</Component>
```
