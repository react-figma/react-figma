---
id: data-fetching
title: Data Fetching
---

It's possible to use `react-figma` with any fetching solution (e.g. [react-fetch-hook](https://github.com/ilyalesik/react-fetch-hook)):

```jsx
import * as React from 'react';
import { Page, Frame, Text } from 'react-figma';
import useFetch from "react-fetch-hook";


export const App = () => {
    const { isLoading, data } = useFetch(`https://reqres.in/api/users/2`);

    return (
        <Page>
            <Frame>
                <Text>{`isLoading: ${(isLoading && 'true') || 'false'}`}</Text>
                <Text>{`Name: ${data && data.name}`}</Text>
            </Frame>
        </Page>
    );
};
```

See full example [here](https://github.com/react-figma/react-figma/tree/master/examples/fetching).
