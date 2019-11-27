# StyleSheet

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

## Example

```typescript
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
