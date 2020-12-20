# Contribution Guidelines

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](./CODE_OF_CONDUCT.md).

Before starting contributing we recommend reading the following guides:
1. [Figma plugins developers page](https://www.figma.com/plugin-docs/intro/)
2. [react-reconciler docs](https://github.com/facebook/react/tree/master/packages/react-reconciler)
3. [Yoga Layout docs](https://yogalayout.com/docs)
4. [React Figma Architecture doc](./docs/architecture.md)

## Collaboration

### Issues assigning

For avoiding situations than two contributors started resolving the same issue, recommending:

1. Make yourself assignee at issue, or, if you haven't rights for this, write a comment at the issue about you started making.
2. Move issue to "In Progress" column at [next](https://github.com/react-figma/react-figma/projects/2) board.

### Development Chat

Feel free to discuss any problem at the [#development](https://spectrum.chat/react-figma/development?tab=posts) channel on our Spectrum.

## Developing

### Setup

1. Install [Node.js](https://nodejs.org) >= 8 and [yarn](https://yarnpkg.com).
2. Install webpack & dependencies: `yarn global add webpack webpack-cli webpack-dev-server`
3. Clone repo: `git clone git@github.com:react-figma/react-figma.git`
4. Go to directory: `cd react-figma`
5. Install dependencies: `yarn`

### Running examples

#### Running webpack at watch mode

1. Change directory to example directory: `cd /examples/<example dir>`
2. Run webpack: "npm run webpack:watch"

#### Plugin adding

1. Go to Figma dashboard (icon with four squares)
2. Click `Plugins`
3. Click to plus icon beside `Development` title
4. Click `Click to choose a manifest.json file` button
5. Select `/examples/<example dir>/manifest.json` file

#### Plugin launching

1. Open or create new document
2. Select Plugins -> Developing -> `<plugin name>` at the menu

### Running linting/tests

* TypeScript: `npm run tsc`
* Jest: `npm run test`

Before commit pre-commit hook will be launched. It runs prettier and linting/tests.

## Pushing changes

1. Check linting/tests
2. Check project is can be built `npm run build`
3. Make Pull Request with your changes.

## Publishing new version to NPM
1. Bump version in `package.json` and `src/renderer.tsx`
2. Create new release/new tag on Github named `vx.y.z` where `x.y.z` is new version number
