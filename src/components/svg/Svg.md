## Svg

Creates frame with figma nodes inside from svg source code. 
Wrapper for the Figma [createNodeFromSvg](https://www.figma.com/plugin-docs/api/createNodeFromSvg/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `source`   | `String` |         | Code of svg                            |
| `style`    | [`Style`](/docs/styling.md)   |  | Not all props 

Also, most of the [Frame](../frame/Frame.md) props are supported.

#### Example

[`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader) is supported:

```javascript
import * as icon from './icon.svg';

...
<Svg source={icon} style={{ width: 300, height: 300 }} />
```
