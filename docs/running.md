---
id: running
title: Running
---

## Writing React code

Add code to `App.tsx`:

```jsx
import * as React from 'react';
import { Page, View, Text } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View>
                <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                <Text style={{ color: '#000000' }}>text</Text>
            </View>
        </Page>
    );
};
```

## Adding plugin

Go to `Menu > Plugins > Development > +` and select the `mainfest.json` file.

<img src="/img/add-plugin.png" align="center"
     alt="Add Plugin" width="303" height="195" />
     


## Running plugin

Go to File Menu > Plugins > Development and select your plugin. 
It's expected result:

![running result](/img/running-result.png)
