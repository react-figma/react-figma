# react-figma

Render React components to Figma.

* 💡 Inspired by [react-sketchapp](https://github.com/airbnb/react-sketchapp).
* 🎨 Designed to create manageable design systems.
* ⚙️ Built on [Figma Plugin API](https://www.figma.com/plugin-docs/intro/).

<p align="center"><img src="./demo.gif" width="800"></p>

Example of code:

```javascript
import * as React from 'react';
import { Page, Rectangle, Text } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page">
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
            <Text characters="text" style={{ color: '#ffffff' }} />
        </Page>
    );
};
```


## Installation

Install it with yarn:

```
yarn add react-figma yoga-layout
```

Or with npm:

```
npm i react-figma yoga-layout --save
```
