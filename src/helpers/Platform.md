# Platform

Analog of the `Platform` module at [React Native](https://facebook.github.io/react-native/docs/platform-specific-code), 
[React Sketchapp](http://airbnb.io/react-sketchapp/docs/API.html#platform).

#### API

**OS**

`Platfrom.OS` returns `"figma""`

**Version**

`Platfrom.Version` returns `1`

**Platform.select** 

When given an object containing Platform.OS as keys, 
returns the value for the platform you are currently running on.

```typescript
const value = Platform.select({
    figma: () => ...
})
```
