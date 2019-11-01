# Roadmap

* Compatibility with `react-native`, `react-sketchapp`, `react-primitives` API.
  - Purposes:
    + Simplifying migration from `react-sketchapp`.
    + Universal rendering.
      Describing universal components that can be rendered at different platforms.
  - What needed:
    + Creating `View` component.
    + Support of `children` prop at `Text` component.
    + Creating `StylesSheet`, `Image`, etc. components.
    + Adding support of all yoga-layout properties.
  - Problems:
    + `react-primitives` can be evaluated at Figma sandbox.
      It can be solved with Webpack/Babel names aliasing.
* Elimination of degradation associated with switching to `react-reconciler`.
  - What needed:
    + Ability to mark the created page as current. `CurrentPage` component was deleted.
    + Automatically closing plugin.
  - Problems:
    + It is not clear how to determine the moment when rendering is done.
* Improving compatibility with Figma API.
  - Purposes:
    + `react-figma` can be considered as a replacement of plain Figma API.
  - What needed:
    + Creating `Ellipse`, `Slice`, etc. components.
    + Implementing `createNodeFromSvg` support.
    + Implementing React Hooks for simplifying messaging with ui-thread.
    + Others by label [topic: figma api](https://github.com/react-figma/react-figma/issues?q=is%3Aopen+is%3Aissue+label%3A%22topic%3A+figma+api%22)
* Developing tools that can simplify working with `react-figma`.
  - HMR support.
  - Code generator that can convert Figma document to `react-figma` app.
  - Own builder that hides details of main-thead/ui-thread details. And maybe implemented HMR support.
  - React DevTools support.
* Improving quality.
  - Documentation.
  - Typing.
  - Testing.
