---
id: hmr
title: HMR
---

HMR (Hot Module Replacement) allows you to apply changes without restarting a plugin.

Note: A plugin should be running to get HMR working.

To enable HMR the following steps are needed:

1. Create `webpack.ui.config.js` file and add the following code:

```js
var configure = require('react-figma-webpack-config/hmr');

module.exports = configure();
```

2. Create `ui.html` file add the following code:

```html
<script type="text/javascript" src="http://localhost:8080/ui.js"></script>
```

3. Change starting script at `package.json`:

```json
-"webpack:watch": "webpack --watch"
+"webpack:watch": "webpack && webpack-dev-server --config webpack.ui.config.js"
```

4. Add the following code to React entry point file (it's `src/ui.tsx` usually):

```js
...

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}
```

See full example [here](https://github.com/react-figma/react-figma/tree/master/examples/basic-hmr).


