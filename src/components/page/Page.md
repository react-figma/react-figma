# Page

Wrapper for Figma [Pages](https://www.figma.com/plugin-docs/api/PageNode/).
Figma document (`figmaRoot`) should be a parent.


#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling.md)   |         |                                                   |
| `isCurrent`| `Boolean`|         | Make page current                                 |

#### Example

```javascript
<Page isCurrent name="My Page" style={{flexDirection: "row"}}>
  <Text>Hello world!</Text>
</Page>
```
