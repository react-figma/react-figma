## Svg

Creates frame with figma nodes inside by svg source code. 
Wrapper for Figma [createNodeFromSvg](https://www.figma.com/plugin-docs/api/createNodeFromSvg/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `source`   | `String` |         | Code of svg                            |
| `style`    | [`Style`](/docs/styling.md)   |  | Not all props 

Also, most of [Frame](../frame/Frame.md) props supported.

#### Example

[`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader) supported:

```javascript
import * as icon from './icon.svg';

...
<Svg source={icon} style={{ width: 300, height: 300 }} />
```
