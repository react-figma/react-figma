# Data fetching example

The app that displayed user name through [swapi](https://swapi.co/) API.

Demo:

<p align="center"><img src="https://media.giphy.com/media/U8NLxe145P2soFwK8p/giphy.gif" width="480"></p>

Code example:

```javascript
import * as React from 'react';
import { Page, Frame, StyleSheet, Text, useFetch } from 'react-figma';


export const App = () => {
    const { isLoading, data } = useFetch(`https://swapi.co/api/people/1`);

    return (
        <Frame>
            <Text>{`isLoading: ${(isLoading && 'true') || 'false'}`}</Text>
            <Text>{`Name: ${data && data.name}`}</Text>
        </Frame>
    );
};                                                                                      
```

[How to run](../../contributing.md#running-examples)

