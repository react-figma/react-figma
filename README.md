# react-figma

[![npm version](https://img.shields.io/npm/v/react-figma.svg)](https://www.npmjs.com/package/react-figma)

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

___

⚠️ Warning!️ Project is not production ready and currently at alpha version. API can be changed.


## Installation

Install it with yarn:

```
yarn add react-figma yoga-layout
```

Or with npm:

```
npm i react-figma yoga-layout --save
```

### Usage

#### Configure main thread

```javascript
import * as React from 'react';
import { renderer, subscribeOnMessages } from 'react-figma';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

(async () => {
    await renderer(<App />);
    figma.closePlugin();
})();
```

#### Configure ui thread

```javascript
import * as yoga from 'yoga-layout';
import { uiWorker } from 'react-figma';

onmessage = event => {
    uiWorker({ yoga })(event);
};
```

#### Import components

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

## Examples

* [design-system](examples/design-system)

## Roadmap

* Adding components:
  - Group
  - Component
  - Line
  - Ellipse
  - Etc.
* Improving exiting components:
  - Adding support of all figma properties.
  - Improving style prop support.
  - Adding support of all yoga-layout properties.
* Updating algorithm (track changes at tree).
* react-primitives support.
* HMR support.
* styled-components supports.
