## Component

Wrapper for the Figma [Component](https://www.figma.com/plugin-docs/api/ComponentNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling.md)   |         | Not all props                                                 |

Also, most of the [ComponentNode](https://www.figma.com/plugin-docs/api/ComponentNode/) fields are supported as props.

#### Example

```javascript
<Component name="Comp">
  <Text>Hello world!</Text>
</Component>
```
