## Star

Wrapper for Figma [Star](https://www.figma.com/plugin-docs/api/StarNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `pointCount` | `Number` |  |  |
| `innerRadius` | `Number` |  |  |
| `style`    | [`Style`](/docs/styling.md)   |  | Not all props 

Also, most of [StarNode](https://www.figma.com/plugin-docs/api/StarNode/) fields supported as props.

#### Example

```javascript
<Star 
    innerRadius={0.5} 
    pointCount={5} 
    style={{ width: 100, height: 100, backgroundColor: '#0000ff' }} 
/>
```
