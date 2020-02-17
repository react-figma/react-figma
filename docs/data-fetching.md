---
id: data-fetching
title: Data Fetching
---

React Figma has APIs that make data fetching more simpler.

## useFetch

Analog of `useFetch` React Hook from [react-fetch-hook](https://github.com/ilyalesik/react-fetch-hook).

```jsx
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

#### Note:

It's required to pass `fetch` function to `uiWorker`:

```javascript
const handler = uiWorker({ yoga, fetch });

onmessage = event => {
    handler(event);
};
```

See full example [here](https://github.com/react-figma/react-figma/tree/master/examples/fetching).
