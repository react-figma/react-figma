---
id: Dimensions
title: Dimensions
---

Analog of the `Dimensions` module from [React Native](https://reactnative.dev/docs/dimensions).

#### API

**addEventListener**

```ts
static addEventListener(type, handler)
```

Add an event handler. Supported events:

`change`: Fires when a property within the Dimensions object changes. 
The argument to the event handler is an object with window and screen properties whose values are the same as the return values of `Dimensions.get('window')` and `Dimensions.get('screen')`, respectively.
* `window` - Size of the visible Application window
* `screen` - Size of the device's screen


**get**

```ts
static get(dim)
```

Initial dimensions are set before runApplication is called so they should be available before any other require's are run, but may be updated later.

Example: `const {height, width} = Dimensions.get('window');`

**removeEventListener** 

```ts
static removeEventListener(type, handler)
```

Remove an event handler.

**set**

```ts
static set(dims)
```

This should only be called from native code by sending the didUpdateDimensions event.
