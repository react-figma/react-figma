---
id: render
title: render(element: ReactElement)
---

Render React `element` into the Figma root node (current document). The only [Pages](./Page.md) allowed as first-class children.


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
  render(<App />);
};
``` 
