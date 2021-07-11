---
id: component
title: Component, Instance, createComponent
---

## Component

Wrapper for the Figma [Component](https://www.figma.com/plugin-docs/api/ComponentNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `style`    | [`Style`](/docs/styling)   |         | Not all props                                                 |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |
| `onLayout` | `Function` |  | Event is fired once the layout has been calculated  |
| `onNodeId` | `Fuction` | | Getting Figma Node ID callback |  
| `description` | `String` | | The annotation entered by the user for this component |
| `documentationLinks` | [`ReadonlyArray<DocumentationLink>`](https://www.figma.com/plugin-docs/api/DocumentationLink/) | | The documentation links for this component |

Also, most of the [ComponentNode](https://www.figma.com/plugin-docs/api/ComponentNode/) fields are supported as props.

## Instance

Wrapper for the `component.createInstance` method.

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `component`| Figma Component Node | | |
| `overrides` | Object  |         | Overrides nested elements' props by `name`        |
| `style`    | [`Style`](/docs/styling)   |         | Not all props |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |
| `detach` | boolean | | Detach instance |

## createComponent

Factory method for creating linked Component and Instance. Returns

```javascript
{
    Component: React.Component,
    Instance: React.Component // with `component` prop defined
}
```

## ComponentSet

Wrapper for the Figma [ComponentSet](https://www.figma.com/plugin-docs/api/ComponentSetNode/). It allows defining component variants.

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         | Only `Component` nodes                            |
| `style`    | [`Style`](/docs/styling)   |         | Not all props                   |
| `description` | `String` | | The annotation entered by the user for this component |
| `documentationLinks` | [`ReadonlyArray<DocumentationLink>`](https://www.figma.com/plugin-docs/api/DocumentationLink/) | | The documentation links for this component |

## Examples

#### Simple component

```jsx
<Component name="Comp">
  <Text>Hello world!</Text>
</Component>
```


#### Creating component instance

```jsx
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

#### Overriding elements inside instance

```jsx
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

```jsx
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

#### Using variants

```jsx
<ComponentSet name="Button">
    <Component name="variant=Primary">
        <PrimaryButton text="Primary" />
    </Component>
    <Component name="variant=Dangerous">
        <DangerousButton text="Dangerous" />
    </Component>
    <Component name="variant=Secondary">
        <SecondaryButton text="Secondary" />
    </Component>
</ComponentSet>
```

