---
id: configure
title: Configuration
---

Let's create a [new figma plugin](https://www.figma.com/plugin-docs/setup/) and 
[Install](installation.md) dependencies before you starting configure project. 
It is recommended to use the following structure of project:

```
├── src
│   ├── components
│   ├── App.tsx
│   ├── code.tsx
│   ├── ui.html
│   └── ui.tsx
├── manifest.json
├── package.json
├── tsconfig.json
└── webpack.config.js
```

React Figma uses both main and ui threads. 
So, they need to be configured and `manifest.json` should contains `main` and `ui` threads:

```json {5,6}
{
  "name": <Plugin Name>,
  "id": <Generated ID>,
  "api": "1.0.0",
  "main": "dist/code.js",
  "ui": "dist/ui.html"
}
```

## Configure Webpack

### Install

Install Webpack: `yarn add webpack webpack-cli -D` or `npm i webpack webpack-cli -D`

It's recommended to use [react-figma-webpack-config](https://github.com/react-figma/webpack-config).
Install it: `yarn add react-figma-webpack-config -D` or `npm i react-figma-webpack-config -D`, and use inside `webpack.config.js`:

```js
var configure = require('react-figma-webpack-config');

module.exports = configure();
```

Configuration also can be extended:

```js
var configure = require('react-figma-webpack-config');

module.exports = configure({
    entry: {
        ui: './src/ui.js', // The entry point for your UI code
        code: './src/code.js' // The entry point for your plugin code
    },
    ...
});
```

### Add to npm scripts

Command `yarn webpack:watch` will be used for the launching plugin build:

```json {4}
{
  "name": "<project-name>",
  "scripts": {
    "webpack:watch": "webpack --watch"
  },
  "dependencies": {
    "react": "^16.9.0",
    "react-figma": "latest",
    "yoga-layout-prebuilt": "^1.9.3"
  },
  "devDependencies": {
    "react-figma-webpack-config": "0.0.2",
    "webpack": "^4.39.2",
    "webpack-cli": "^3.3.7"
  }
}
```

### Universal rendering

Webpack aliasing can be used for the universal rendering:

```js
var configure = require('react-figma-webpack-config');

module.exports = configure({
    resolve: {
        alias: {
            'react-native$': 'react-figma'
        }
    }
});
```

## Configure main thread

At the `code.tsx`:

```javascript
import * as React from 'react';
import { render, subscribeOnMessages } from 'react-figma';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};

render(<App />, figma.root);
```

## Configure ui thread

At the `ui.tsx`:

```javascript
import * as yoga from 'yoga-layout-prebuilt';
import { uiWorker } from 'react-figma';

onmessage = event => {
    uiWorker({ yoga })(event);
};
```
