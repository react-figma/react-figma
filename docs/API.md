# API Overview

API divided into two main parts:

* [UI Primitives](#ui-primitives): Components/modules that represent compatibility layer with react-native.
* [Figma components](#figma-components): Components that match some of Figma node types or API methods.

Also, there is [`render`](../src/render.md) function - entry point for React App.

## UI Primitives

Components, that have compatible with react-native API.

* [View](../src/components/view/View.md) — The most fundamental component for building a UI.
* [Text](../src/components/text/Text.md) - A React component for displaying text.
* [Image](../src/components/Image/Image.md) - A React component for displaying different types of images.
* [StyleSheet](../src/helpers/StyleSheet.md) — A StyleSheet is an abstraction similar to CSS StyleSheets.
* [Platform](../src/helpers/Platform.md) — A module that detects the platform in which the app is running.

## Figma components

* [Page](../src/components/page/Page.md) — A React component for displaying Figma page.
* [Frame](../src/components/frame/Frame.md) — A React component for displaying Figma frame.
* [Svg](../src/components/svg/Svg.md) — A React component that transform SVG source to Figma nodes.
* [Ellipse](../src/components/ellipse/Ellipse.md) — A React component for displaying Figma ellipse.
* [Group](../src/components/group/Group.md) — A React component for grouping Figma nodes.
* [Line](../src/components/line/Line.md) — A React component for displaying Figma line.
* [Rectangle](../src/components/rectangle/Rectangle.md) — A React component for displaying Figma rectangle.
* [Star](../src/components/star/Star.md) — A React component for displaying Figma star.
* [Vector](../src/components/vector/Vector.md) — A React component for displaying Figma vector.

