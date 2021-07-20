# React Figma

<img src="./logo.svg" align="right"
     alt="React Figma logo by Lera Lesik" width="160" height="160">

[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors)
[![npm version](https://img.shields.io/npm/v/react-figma.svg)](https://www.npmjs.com/package/react-figma)
[![CircleCI](https://circleci.com/gh/react-figma/react-figma.svg?style=shield)](https://circleci.com/gh/react-figma/react-figma)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/react-figma)

A React renderer into [Figma](https://www.figma.com). Use React components as a source for your designs.

* 🍬 Compatible with [react-native](https://facebook.github.io/react-native/), [react-sketchapp](https://github.com/airbnb/react-sketchapp), [react-primitives](https://github.com/lelandrichardson/react-primitives) API.
* 🦄 Flexible layouts support with [Yoga Layout](https://yogalayout.com/).
* ♻️ Hydration and [HMR](https://webpack.js.org/concepts/hot-module-replacement/) support.
* ⚙️ Built on [Figma Plugin API](https://www.figma.com/plugin-docs/intro/).

<p align="center"><img src="./demo.gif" width="800"></p>

Example of code:

```javascript
import * as React from 'react';
import { Page, View, Text } from 'react-figma';

export const App = () => {
    return (
        <Page name="New page" isCurrent>
            <View>
                <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                <Text style={{ color: '#ffffff' }}>text</Text>
            </View>
        </Page>
    );
};
```

___

⚠️ Warning!️ Project is not production ready and currently at beta version. API can be changed.

___


## Installation

#### Using boilerplate

You can use [react-figma-boilerplate](https://github.com/react-figma/react-figma-boilerplate) for creating own projects.

#### From scratch

Install it with yarn:

```
yarn add react react-figma
```

Or with npm:

```
npm i react react-figma --save
```

### Usage

#### Configure main thread

```javascript
import { setupMainThread } from 'react-figma/rpc';

figma.showUI(__html__, { visible: false });

setupMainThread();
```

#### Configure ui thread

```javascript
import * as React from 'react';
import { App } from './App';

import 'react-figma/rpc';
import { render } from 'react-figma';

render(<App />);
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

## [Docs](https://react-figma.now.sh/docs/API)

* [API Overview](https://react-figma.now.sh/docs/API)
  + [render](https://react-figma.now.sh/docs/api/render)
  + [Page](https://react-figma.now.sh/docs/api/page)
  + [Frame](https://react-figma.now.sh/docs/api/frame)
  + [View](https://react-figma.now.sh/docs/api/view)
  + [Text](https://react-figma.now.sh/docs/api/text)
  + [Image](https://react-figma.now.sh/docs/api/image)
  + ...
* [Styling](https://react-figma.now.sh/docs/styling)
* [Architecture](https://react-figma.now.sh/docs/architecture)

## Examples

* [Basic](examples/basic)
  + [Basic + HMR](examples/basic-hmr)
* [Design system](examples/design-system)
* [Interactive](examples/interactive)
* [Data fetching](examples/fetching)
* [💅 styled-components](examples/styled-components)
* [PrimerDemo](https://github.com/react-figma/PrimerDemo) - Example of multifplatform UI-kit

## Become a Contributor 🎖

Whether you're helping us implement features, fix bugs or improve the docs, we'd love to have you as part of the community! 

#### How to Contribute

Check out our [Contributing Guide](./contributing.md) for ideas on contributing and setup steps for getting repository up and running on your local machine.

## Acknowledgements

React Figma team wishes to thank the following invaluable contributions:

* [Lera Lesik](https://twitter.com/Lera_Lesik), for creating project logo.
* [Maksim](https://github.com/pret-a-porter), for TypeScript counseling.

## Tested with browserstack

<a href="https://www.browserstack.com/">
     <img alt="Tested with browserstack" src="https://raw.githubusercontent.com/zerobias/effector/master/website/media/Browserstack-logo.svg?sanitize=true" height="64">
</a>     


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/ilialesik"><img src="https://avatars2.githubusercontent.com/u/1270648?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ilya Lesik</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=ilyalesik" title="Code">💻</a></td>
    <td align="center"><a href="http://losyar.com"><img src="https://avatars2.githubusercontent.com/u/1065122?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Losev Yaroslav</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=LosYear" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/HVish"><img src="https://avatars1.githubusercontent.com/u/14261201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vishnu Singh</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=HVish" title="Code">💻</a></td>
    <td align="center"><a href="http://corrinachow.com"><img src="https://avatars1.githubusercontent.com/u/35117708?v=4?s=100" width="100px;" alt=""/><br /><sub><b>corrina</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=corrinachow" title="Code">💻</a></td>
    <td align="center"><a href="http://www.zacharyquintenwitt.com"><img src="https://avatars1.githubusercontent.com/u/5651980?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zachary Witt</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=zqwitt" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/theashraf"><img src="https://avatars1.githubusercontent.com/u/39750790?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abdelrahman Ashraf</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=theashraf" title="Code">💻</a></td>
    <td align="center"><a href="https://seanprashad.com"><img src="https://avatars2.githubusercontent.com/u/13009507?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sprashad</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=SeanPrashad" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/wyvl"><img src="https://avatars1.githubusercontent.com/u/40932265?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vivian Lee</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=wyvl" title="Code">💻</a></td>
    <td align="center"><a href="https://macintoshhelper.com"><img src="https://avatars2.githubusercontent.com/u/6757532?v=4?s=100" width="100px;" alt=""/><br /><sub><b>macintoshhelper</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=macintoshhelper" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pgrimaud"><img src="https://avatars1.githubusercontent.com/u/1866496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pierre Grimaud</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=pgrimaud" title="Documentation">📖</a></td>
    <td align="center"><a href="http://gwst.io"><img src="https://avatars3.githubusercontent.com/u/2213636?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Greg Westneat</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=leggomuhgreggo" title="Code">💻</a> <a href="https://github.com/react-figma/react-figma/commits?author=leggomuhgreggo" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
