---
id: svg
title: Svg
---

Creates frame with figma nodes inside from svg source code. 
Wrapper for the Figma [createNodeFromSvg](https://www.figma.com/plugin-docs/api/createNodeFromSvg/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `source`   | `String` |         | Code of svg                            |
| `style`    | [`Style`](/docs/styling)   |  | Not all props |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |
| `onLayout` | `Function` |  | Event is fired once the layout has been calculated  |

Also, most of the [Frame](Frame) props are supported.

#### Examples

[`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader) is supported:

```jsx
import * as icon from './icon.svg';

...
<Svg source={icon} style={{ width: 300, height: 300 }} />
```

Also dynamic source supported:
```jsx

const source = `<svg><path fill=`${flag ? "#ff0000" : "#00ff00"}`></path></svg>`

<Svg source={source}  />
```
