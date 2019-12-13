# Component, Instance, createComponent

## Component

Wrapper for the Figma [Component](https://www.figma.com/plugin-docs/api/ComponentNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling.md)   |         | Not all props                                                 |

Also, most of the [ComponentNode](https://www.figma.com/plugin-docs/api/ComponentNode/) fields are supported as props.

## Instance

Wrapper for the `component.createInstance` method.

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `component`| Figma Component Node | | |
| `overrides` | Object  |         | Overrides nested elements' props by `name`        |
| `style`    | [`Style`](/docs/styling.md)   |         | Not all props        

## createComponent

Factory method for creating linked Component and Instance. Returns

```javascript
{
    Component: React.Component,
    Instance: React.Component // with `component` prop defined
}
```

## Examples

#### Simple component

```javascript
<Component name="Comp">
  <Text>Hello world!</Text>
</Component>
```


#### Creating component instance

```javascript
const Rect = createComponent();

...

<>
    <Rect.Component name="rect-component">
        <Rectangle
            style={{
                width: 200,
                height: 100,
                backgroundColor: "blue"
            }}
        />
    </Rect.Component>
    <Rect.Instance style={{ marginTop: 20, width: '100%' }} />
</>
```

### Overriding elements inside instance

```javascript
const Rect = createComponent();

...

<>
    <Rect.Component name="rect-component">
        <Rectangle
            name="rect"
            style={{
                width: 200,
                height: 100,
                backgroundColor: "blue"
            }}
        />
    </Rect.Component>
    <Rect.Instance style={{ marginTop: 20, width: '100%' }} overrides={{
        rect: {
            style: {
                backgroundColor: "red"
            }
        } 
    }} />
</>
```

Text content overriding:

```javascript
const Txt = createComponent();
...
<Txt.Component name="text-component" style={{ marginTop: 20 }}>
    <Text name="text" style={{ fontSize: 24, width: 200 }}>
        Some text
    </Text>
</Txt.Component>
<Txt.Instance
    style={{ marginTop: 20 }}
    overrides={{
        text: {
            characters: 'Overrided text'
        }
    }}
/>
```

