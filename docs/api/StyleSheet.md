---
id: StyleSheet
title: StyleSheet
---

A StyleSheet is an abstraction similar to CSS StyleSheets.
Analog of the `StyleSheet` module at [React Native](https://facebook.github.io/react-native/docs/stylesheet), 
[React Sketchapp](http://airbnb.io/react-sketchapp/docs/API.html#stylesheet).

## API

`create(styles)`

Create an optimized StyleSheet reference from the style object.

`flatten(styles)`

Flatten an array of style objects into one aggregated object, or look up the definition for a registered stylesheet.

`resolve(style)`

Resolve one style.

`compose(style1, style2)`

Combines two styles such that `style2` will override any styles in `style1`.

`hairlineWidth`

This is defined as the width of a thin line on the platform. Returns 1.

`absoluteFill`, `absoluteFillObject`

A very common pattern is to create overlays with position absolute and 
zero positioning `(position: "absolute", left: 0, top: 0, width: "100%", height: "100%")`,
so absoluteFill can be used for convenience and to reduce duplication of these repeated styles.
If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:

```javascript
const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFill,
  },
});
```

## Example

```jsx
const styles = StyleSheet.create({
  foo: {
    fontSize: 24,
    color: 'red',
  },
  bar: {
    fontSize: 36,
    color: 'blue',
  },
});
// { foo: 1, bar: 2 }

<View>
  <Text style={styles.foo} />
  <Text style={styles.bar} />
</View>;
```
