## Image

Analog of the `Image` component at [React Native](https://facebook.github.io/react-native/docs/image), 
[React Sketchapp](http://airbnb.io/react-sketchapp/docs/API.html#image). 
Renders Figma rectangle node with background.

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `source`   | `String` |         | Path for loading image                            |
| `resizeMode`| `ResizeMode` |         |                                              |
| `style`    | [`Style`](/docs/styling.md)   |         |                              |

```typescript
type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center' | 'repeat' | 'none';
```

#### Examples

Absolute path supported:

```javascript
<Image
  source="http://placekitten.com/400"
  resizeMode="contain"
  style={{
    height: 400,
    width: 400,
  }}
/>
```

Webpack image loader supported:

```javascript
import * as img from "./icon.png";
...
<Image
  source={img}
  resizeMode="contain"
  style={{
    height: 400,
    width: 400,
  }}
/>
```
