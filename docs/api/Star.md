---
id: star
title: Star
---

Wrapper for the Figma [Star](https://www.figma.com/plugin-docs/api/StarNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `pointCount` | `Number` |  |  |
| `innerRadius` | `Number` |  |  |
| `style`    | [`Style`](/docs/styling)   |  | Not all props |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |

Also, most of the [StarNode](https://www.figma.com/plugin-docs/api/StarNode/) fields are supported as props.

#### Example

```javascript
<Star 
    innerRadius={0.5} 
    pointCount={5} 
    style={{ width: 100, height: 100, backgroundColor: '#0000ff' }} 
/>
```
