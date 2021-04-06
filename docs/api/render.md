---
id: render
title: render(element, containerNodeId)
---

Render `element` at Figma `containerNodeId`.

##### `element` (required)

Top-level React component that defines your Figma app.

Example:

```jsx
  <Page name="Mobile">
    <Frame name="iPhone">
      <View>
        <Text>Hello World</Text>
      </View>
    </Frame>
  </Page>
```

##### `containerNodeId` (optional)

The figma container node id to render into. Defaults to the figma root nodes id (figma.root.id).

#### Examples

Render multiple pages:

```jsx
import { Page, View, Text, render } from 'react-figma';

const App = () => (
    <>
          <Page name="Page 1">
              <View>
                <Text>Hello world!</Text>
              </View>
          </Page>
          <Page name="Page 2">
              <View>
                <Text>Hello world!</Text>
              </View>
          </Page>
    </>
);

export default () => {
  render(<App />, figma.root);
};
``` 

Render to `figma.currentPage`:

```jsx
import { View, Text, render } from 'react-figma';

const App = () => (
    <View>
        <Text>Hello world!</Text>
    </View>
);

export default () => {
  render(<App />, figma.currentPage.id);
};
``` 
