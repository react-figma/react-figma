---
id: styling
title: Styling
---

Components use CSS styles + flexbox layout.

#### Layout Styles

| property                  | type                                                                                        | supported? |
| ------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| `shadowColor`             | [`Color`](colors.md)                                                                        | ✅          |
| `shadowOffset`            | `{ width: number, height: number }`                                                         | ✅          |
| `shadowOpacity`           | `number`                                                                                    | ✅          |
| `shadowSpread`            | `number`                                                                                    | ⛔          |
| `shadowRadius`            | `number`                                                                                    | ✅          |
| `width`                   | `number` &#124; `percentage`                                                                | ✅          |
| `height`                  | `number` &#124; `percentage`                                                                | ✅          |
| `top`                     | `number` &#124; `percentage`                                                                | ✅          |
| `left`                    | `number` &#124; `percentage`                                                                | ✅          |
| `right`                   | `number` &#124; `percentage`                                                                | ✅          |
| `bottom`                  | `number` &#124; `percentage`                                                                | ✅          |
| `minWidth`                | `number` &#124; `percentage`                                                                | ✅          |
| `maxWidth`                | `number` &#124; `percentage`                                                                | ✅          |
| `minHeight`               | `number` &#124; `percentage`                                                                | ✅          |
| `maxHeight`               | `number` &#124; `percentage`                                                                | ✅          |
| `margin`                  | `number` &#124; `percentage`                                                                | ✅          |
| `marginVertical`          | `number` &#124; `percentage`                                                                | ✅          |
| `marginHorizontal`        | `number` &#124; `percentage`                                                                | ✅          |
| `marginTop`               | `number` &#124; `percentage`                                                                | ✅          |
| `marginBottom`            | `number` &#124; `percentage`                                                                | ✅          |
| `marginLeft`              | `number` &#124; `percentage`                                                                | ✅          |
| `marginRight`             | `number` &#124; `percentage`                                                                | ✅          |
| `padding`                 | `number` &#124; `percentage`                                                                | ✅          |
| `paddingVertical`         | `number` &#124; `percentage`                                                                | ✅          |
| `paddingHorizontal`       | `number` &#124; `percentage`                                                                | ✅          |
| `paddingTop`              | `number` &#124; `percentage`                                                                | ✅          |
| `paddingBottom`           | `number` &#124; `percentage`                                                                | ✅          |
| `paddingLeft`             | `number` &#124; `percentage`                                                                | ✅          |
| `paddingRight`            | `number` &#124; `percentage`                                                                | ✅          |
| `position`                | `absolute` &#124; `relative`                                                                | ✅          |
| `flexDirection`           | `row` &#124; `row-reverse` &#124; `column` &#124; `column-reverse`                          | ✅          |
| `flexWrap`                | `wrap` &#124; `nowrap`                                                                      | ✅          |
| `justifyContent`          | `flex-start` &#124; `flex-end` &#124; `center` &#124; `space-between` &#124; `space-around` | ✅          |
| `alignItems`              | `flex-start` &#124; `flex-end` &#124; `center` &#124; `stretch`                             | ✅          |
| `alignSelf`               | `auto` &#124; `flex-start` &#124; `flex-end` &#124; `center` &#124; `stretch`               | ✅          |
| `overflow`                | `visible` &#124; `hidden` &#124; `scroll`                                                   | ✅          |
| `flex`                    | `number`                                                                                    | ✅          |
| `flexGrow`                | `number`                                                                                    | ✅          |
| `flexShrink`              | `number`                                                                                    | ✅          |
| `flexBasis`               | `number` &#124; `percentage`                                                                | ✅          |
| `aspectRatio`             | `number`                                                                                    | ✅          |
| `zIndex`                  | `number`                                                                                    | ⛔          |
| `backfaceVisibility`      | `visible` &#124; `hidden`                                                                   | ⛔️         |
| `backgroundImage`         | `string` &#124; `{uri: string}   `                                                               | ✅          |
| `backgroundColor`         | [`Color`](colors.md)                                                                        | ✅          |
| `borderColor`             | [`Color`](colors.md)                                                                        | ✅          |
| `borderTopColor`          | [`Color`](colors.md)                                                                        | ⛔          |
| `borderRightColor`        | [`Color`](colors.md)                                                                        | ⛔          |
| `borderBottomColor`       | [`Color`](colors.md)                                                                        | ⛔          |
| `borderLeftColor`         | [`Color`](colors.md)                                                                        | ⛔          |
| `borderRadius`            | `number` &#124; `percentage`                                                                | ✅          |
| `borderTopLeftRadius`     | `number` &#124; `percentage`                                                                | ✅          |
| `borderTopRightRadius`    | `number` &#124; `percentage`                                                                | ✅          |
| `borderBottomLeftRadius`  | `number` &#124; `percentage`                                                                | ✅          |
| `borderBottomRightRadius` | `number` &#124; `percentage`                                                                | ✅          |
| `borderStyle`             | `solid` &#124; `dotted` &#124; `dashed`                                                     | ⛔          |
| `borderWidth`             | `number` &#124; `percentage`                                                                | ✅          |
| `borderTopWidth`          | `number` &#124; `percentage`                                                                | ⛔          |
| `borderRightWidth`        | `number` &#124; `percentage`                                                                | ⛔          |
| `borderBottomWidth`       | `number` &#124; `percentage`                                                                | ⛔          |
| `borderLeftWidth`         | `number` &#124; `percentage`                                                                | ⛔          |
| `opacity`                 | `number`                                                                                    | ✅          |

#### Type Styles

| property             | type                                                                 | supported? |
| -------------------- | -------------------------------------------------------------------- | ---------- |
| [`Color`](colors.md) | [`Color`](colors.md)                                                 | ✅          |
| `fontFamily`         | `string`                                                             | ✅          |
| `fontSize`           | `number`                                                             | ✅          |
| `fontStyle`          | `normal` &#124; `italic` &#124; `solid`                             | ✅          |
| `fontWeight`         | 'normal' &#124; 'bold' &#124; '100' &#124; '200' &#124; ... &#124; '900' | ✅          |
| `textDecorationLine` | `none` &#124; `underline` &#124; `line-through`                      | ✅          |
| `textShadowOffset`   | `{ width: number, height: number }`                                  | ✅          |
| `textShadowRadius`   | `number`                                                             | ✅          |
| `textShadowColor`    | [`Color`](colors.md)                                                 | ✅          |
| `letterSpacing`      | `number` &#124; `percentage`                                         | ✅          |
| `lineHeight`         | `auto` &#124; `number` &#124; `percentage`                           | ✅          |
| `textAlign`          | `auto` &#124; `left` &#124; `right` &#124; `center` &#124; `justify` | ✅          |
| `writingDirection`   | `auto` &#124; `ltr` &#124; `rtl`                                     | ⛔️         |
| `opacity`            | `number`                                                             | ✅          |
| `percentage`         | `points` &#124; `percentages`                                        | ✅          |

Styles can be passed to components as plain objects.

```jsx
import { View, StyleSheet } from 'react-figma';

// inline props
<View
  style={{
    backgroundColor: 'hotPink',
    width: 300,
  }}
/>

// plain JS object
const style = {
  backgroundColor: 'hotPink',
  width: 300,
}

<View style={style} />

// StyleSheet
const styles = StyleSheet.create({
  foo: {
    backgroundColor: 'hotPink',
    width: 300,
  }
})

<View style={styles.foo} />
<View style={[styles.foo, styles.bar]} />
```

You can use variables in your styles just like a standard React application:

```jsx
const colors = {
  Haus: '#F3F4F4',
  Night: '#333',
  Sur: '#96DBE4',
  Peach: '#EFADA0',
  Pear: '#93DAAB',
};

<View>
  {Object.keys(colors).map(name => (
    <View
      key={name}
      style={{
        flex: 1,
        backgroundColor: colors[name],
      }}
    />
  ))}
</View>;
```

#### Inheritance

It's possible to enable a CSS-like [inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance). 

Available under the flag `process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED`.

An example:

```jsx
<View style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto' }}>
    <View style={{ fontSize: 48 }}>
        <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
        <Text style={{ color: '#ffffff' }}>text</Text>
    </View>
</View>
```

The text got a combined style:

```js
({fontWeight: 'bold', fontFamily: 'Roboto', fontSize: 48, color: '#ffffff' })
```

Inherited styles props:

* color
* fontFamily
* fontSize
* fontStyle
* fontVariant
* fontWeight
* textAlign
* lineHeight
* letterSpacing

Supported components:

* Frame (and View)
* Page
* Text (as a recipient)

> Warning! Inheritance is not compatible with React Native.

#### Web defaults

Available under the flag `process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED`.

On the Web defaults mode, react-figma will try to simulate Web default behavior:

* A text with display: block should get full width (`width: 100%`)
* A container with display: flex should get `flexDirection: row`
* `alignItems: stretch` for containers by default
