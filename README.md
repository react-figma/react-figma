# React Figma

<img src="./logo.svg" align="right"
     alt="React Figma logo by Lera Lesik" width="160" height="160">

[![npm version](https://img.shields.io/npm/v/react-figma.svg)](https://www.npmjs.com/package/react-figma)
[![CircleCI](https://circleci.com/gh/react-figma/react-figma.svg?style=shield)](https://circleci.com/gh/react-figma/react-figma)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

A React renderer for [Figma](https://www.figma.com). Use React components as a source for your designs.

* 🍬 Compatible with [react-native](https://facebook.github.io/react-native/), [react-sketchapp](https://github.com/airbnb/react-sketchapp), [react-primitives](https://github.com/lelandrichardson/react-primitives) API.
* 🦄 Flexible layouts support with [Yoga Layout](https://yogalayout.com/).
* ♻️ Hydration and [HMR](https://webpack.js.org/concepts/hot-module-replacement/) support.
* ⚙️ Built on [Figma Plugin API](https://www.figma.com/plugin-docs/intro/).
* 🚫 **Is not a code generator**.

<p align="center"><img src="https://user-images.githubusercontent.com/1270648/89524327-09365c80-d7ed-11ea-9cb1-08f6fd56a350.gif" width="800"></p>

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

## [Docs](https://react-figma.dev/docs/API)

* [API Overview](https://react-figma.dev/docs/API)
  + [render](https://react-figma.dev/docs/api/render)
  + [Page](https://react-figma.dev/docs/api/page)
  + [Frame](https://react-figma.dev/docs/api/frame)
  + [View](https://react-figma.dev/docs/api/view)
  + [Text](https://react-figma.dev/docs/api/text)
  + [Image](https://react-figma.dev/docs/api/image)
  + ...
* [Styling](https://react-figma.dev/docs/styling)
* [Architecture](https://react-figma.dev/docs/architecture)

## Examples

* [Basic](examples/basic)
  + [Basic + HMR](examples/basic-hmr)
* [Design system](examples/design-system)
* [Interactive](examples/interactive)
* [UI](examples/ui) - Interact with a Plugin UI
* [Data fetching](examples/fetching)
* [💅 styled-components](examples/styled-components)
* [PrimerDemo](https://github.com/react-figma/PrimerDemo) - Example of multiplatform UI-kit
* [Component Variants](examples/component-variants)
* [MDX](examples/mdx)
* [Local Styles](examples/local-styles)

## Sponsoring

[Become a backer](https://opencollective.com/reactfigma#backer) and get your logo on our Readme on GitHub with a link to your site.

<a href="https://opencollective.com/reactfigma/backer/0/website" target="_blank"><img src="https://opencollective.com/reactfigma/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/backer/1/website" target="_blank"><img src="https://opencollective.com/reactfigma/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/backer/2/website" target="_blank"><img src="https://opencollective.com/reactfigma/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/backer/3/website" target="_blank"><img src="https://opencollective.com/reactfigma/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/backer/4/website" target="_blank"><img src="https://opencollective.com/reactfigma/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/backer/5/website" target="_blank"><img src="https://opencollective.com/reactfigma/backer/5/avatar.svg"></a>

[Become a sponsor](https://opencollective.com/reactfigma#sponsor) and get your logo on our README on GitHub with a link to your site.

<a href="https://opencollective.com/reactfigma/sponsor/0/website" target="_blank"><img src="https://opencollective.com/reactfigma/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/sponsor/1/website" target="_blank"><img src="https://opencollective.com/reactfigma/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/sponsor/2/website" target="_blank"><img src="https://opencollective.com/reactfigma/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/sponsor/3/website" target="_blank"><img src="https://opencollective.com/reactfigma/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/sponsor/4/website" target="_blank"><img src="https://opencollective.com/reactfigma/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/reactfigma/sponsor/5/website" target="_blank"><img src="https://opencollective.com/reactfigma/sponsor/5/avatar.svg"></a>

## Contributing

Everyone is welcome to contribute. Whether you're helping us implement features, fix bugs or improve the docs, we'd love to have you as part of the community! 

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
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/ilialesik"><img src="https://avatars2.githubusercontent.com/u/1270648?v=4?s=100" width="100px;" alt="Ilya Lesik"/><br /><sub><b>Ilya Lesik</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=ilyalesik" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://losyar.com"><img src="https://avatars2.githubusercontent.com/u/1065122?v=4?s=100" width="100px;" alt="Losev Yaroslav"/><br /><sub><b>Losev Yaroslav</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=LosYear" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HVish"><img src="https://avatars1.githubusercontent.com/u/14261201?v=4?s=100" width="100px;" alt="Vishnu Singh"/><br /><sub><b>Vishnu Singh</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=HVish" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://corrinachow.com"><img src="https://avatars1.githubusercontent.com/u/35117708?v=4?s=100" width="100px;" alt="corrina"/><br /><sub><b>corrina</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=corrinachow" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.zacharyquintenwitt.com"><img src="https://avatars1.githubusercontent.com/u/5651980?v=4?s=100" width="100px;" alt="Zachary Witt"/><br /><sub><b>Zachary Witt</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=zqwitt" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/theashraf"><img src="https://avatars1.githubusercontent.com/u/39750790?v=4?s=100" width="100px;" alt="Abdelrahman Ashraf"/><br /><sub><b>Abdelrahman Ashraf</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=theashraf" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://seanprashad.com"><img src="https://avatars2.githubusercontent.com/u/13009507?v=4?s=100" width="100px;" alt="sprashad"/><br /><sub><b>sprashad</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=SeanPrashad" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wyvl"><img src="https://avatars1.githubusercontent.com/u/40932265?v=4?s=100" width="100px;" alt="Vivian Lee"/><br /><sub><b>Vivian Lee</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=wyvl" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://macintoshhelper.com"><img src="https://avatars2.githubusercontent.com/u/6757532?v=4?s=100" width="100px;" alt="macintoshhelper"/><br /><sub><b>macintoshhelper</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=macintoshhelper" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pgrimaud"><img src="https://avatars1.githubusercontent.com/u/1866496?v=4?s=100" width="100px;" alt="Pierre Grimaud"/><br /><sub><b>Pierre Grimaud</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=pgrimaud" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://gwst.io"><img src="https://avatars3.githubusercontent.com/u/2213636?v=4?s=100" width="100px;" alt="Greg Westneat"/><br /><sub><b>Greg Westneat</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=leggomuhgreggo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://mariusreimer.com"><img src="https://avatars3.githubusercontent.com/u/15148377?v=4?s=100" width="100px;" alt="Marius Reimer"/><br /><sub><b>Marius Reimer</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=reime005" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://szeko.com.au"><img src="https://avatars1.githubusercontent.com/u/5523724?v=4?s=100" width="100px;" alt="szeko"/><br /><sub><b>szeko</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=szeko" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yoniholmes"><img src="https://avatars.githubusercontent.com/u/184589?v=4?s=100" width="100px;" alt="Jonathan Holmes"/><br /><sub><b>Jonathan Holmes</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=yoniholmes" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/headwindz"><img src="https://avatars.githubusercontent.com/u/7504237?v=4" width="100px;" alt="headwindz"/><br /><sub><b>headwindz</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=headwindz" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kant"><img src="https://avatars.githubusercontent.com/u/32717?v=4?s=100" width="100px;" alt="Darío Hereñú"/><br /><sub><b>Darío Hereñú</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=kant" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KonstHardy"><img src="https://avatars.githubusercontent.com/u/46906648?v=4?s=100" width="100px;" alt="Konstantin Popov"/><br /><sub><b>Konstantin Popov</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=KonstHardy" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://utkarsh299-tech.github.io/myportfolio/"><img src="https://avatars.githubusercontent.com/u/60184229?v=4?s=100" width="100px;" alt="Utkarsh Singh"/><br /><sub><b>Utkarsh Singh</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=Utkarsh299-tech" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mrkenneh"><img src="https://avatars.githubusercontent.com/u/96268806?v=4?s=100" width="100px;" alt="mrkenneh"/><br /><sub><b>mrkenneh</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=mrkenneh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/annuhdo"><img src="https://avatars.githubusercontent.com/u/6846913?v=4?s=100" width="100px;" alt="Anna Do"/><br /><sub><b>Anna Do</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=annuhdo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stevenpetryk.com"><img src="https://avatars.githubusercontent.com/u/1724000?v=4?s=100" width="100px;" alt="Steven Petryk"/><br /><sub><b>Steven Petryk</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=stevenpetryk" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.anotherplanet.io"><img src="https://avatars.githubusercontent.com/u/197471?v=4?s=100" width="100px;" alt="Thierry Charbonnel"/><br /><sub><b>Thierry Charbonnel</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=thierryc" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jv-la.com"><img src="https://avatars.githubusercontent.com/u/1788455?v=4?s=100" width="100px;" alt="Jack Oliver"/><br /><sub><b>Jack Oliver</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=jackoliver" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://marc-abramowitz.com"><img src="https://avatars.githubusercontent.com/u/305268?v=4?s=100" width="100px;" alt="Marc Abramowitz"/><br /><sub><b>Marc Abramowitz</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=msabramo" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fishtriangle"><img src="https://avatars.githubusercontent.com/u/66234622?v=4?s=100" width="100px;" alt="fishtriangle"/><br /><sub><b>fishtriangle</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=fishtriangle" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/carlostpg"><img src="https://avatars.githubusercontent.com/u/124635572?v=4?s=100" width="100px;" alt="Carlos"/><br /><sub><b>Carlos</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=carlostpg" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://mraghuram3.github.io/"><img src="https://avatars.githubusercontent.com/u/19218859?v=4?s=100" width="100px;" alt="Raghu Ram M"/><br /><sub><b>Raghu Ram M</b></sub></a><br /><a href="https://github.com/react-figma/react-figma/commits?author=mraghuram3" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
