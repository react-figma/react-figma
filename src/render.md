# render(element, container)

Render `element` at Figma `container`.


##### `element` (required)

Top-level React component that defines your Figma app.

Example:

```js
  <Page name="Mobile">
    <Frame name="iPhone">
      <View>
        <Text>Hello World</Text>
      </View>
    </Frame>
  </Page>
```

##### `container` (required)

The element to render into. It's recommended to use `figma.root` or `figma.currentPage`.

#### Examples

Render multiple pages:

```javascript
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

```javascript
import { View, Text, render } from 'react-figma';

const App = () => (
    <View>
        <Text>Hello world!</Text>
    </View>
);

export default () => {
  render(<App />, figma.currentPage);
};
``` 
