---
title: Using Figma Variants with react-figma
author: Ilya Lesik
authorURL: http://twitter.com/ilialesik
---

[The original dev.to post](https://dev.to/lessmess/using-figma-variants-with-react-figma-50k0)

> TL;DR [Give me a code!](https://github.com/react-figma/react-figma/tree/master/examples/component-variants)

[Variants](https://www.figma.com/blog/bridging-design-and-code-with-variants/) is an amazing new feature of Figma, which lets you combine variations of the same component — simplifying the asset panel and mapping components more closely to code.

![Figma Variants, source: figma.com](https://dev-to-uploads.s3.amazonaws.com/i/9ys6j8ugzyolyt3kkloi.png)

We were waiting for their launch since the announcement and started the implementation of Variants support in [react-figma](https://github.com/react-figma/react-figma) right after the Figma API [Version 1, Update 18](https://www.figma.com/plugin-docs/blog/2020/10/28/version-1-update-18/) release. Figma API got several new APIs:

- Type [ComponentSetNode](https://www.figma.com/plugin-docs/api/ComponentSetNode/) — A component set contains the variants of a component.
- [combineAsVariants](https://www.figma.com/plugin-docs/api/figma/#combineasvariants) method — Creates a new ComponentSetNode by combining all the nodes in nodes, which should all have type ComponentNode.
- [importComponentSetByKeyAsync](https://www.figma.com/plugin-docs/api/figma/#importcomponentsetbykeyasync) method.

# `ComponentSet` component

We added a new component for Figma Variants support: the [`ComponentSet`](https://react-figma.now.sh/docs/api/component#componentset). It’s accepts a set of `Component` nodes as the `children` prop. We created [an example](https://github.com/react-figma/react-figma/tree/master/examples/component-variants) with a button that has three variants: *primary*, *dangerous*, and *secondary*:

```jsx
<ComponentSet name="Button">
    <Component name="variant=Primary">
        <PrimaryButton text="Primary" />
    </Component>
    <Component name="variant=Dangerous">
        <DangerousButton text="Dangerous" />
    </Component>
    <Component name="variant=Secondary">
        <SecondaryButton text="Secondary" />
    </Component>
</ComponentSet>
```

(see complete code [here](https://github.com/react-figma/react-figma/blob/master/examples/component-variants/src/App.tsx))

You can try the result of the rendering [here](https://www.figma.com/community/file/903625837057389198/Component-Variants-%2F-react-figma) or watch a demo gif:

![Demo Gif](https://dev-to-uploads.s3.amazonaws.com/i/ycouva191h8c838wspps.gif)

# Conclusion

Variants are a really useful feature, especially for design systems creation. So, enjoy it with [react-figma](https://github.com/react-figma/react-figma) too!

Happy coding! 🙌

# Thanks

- Yaroslav Losev [@losyear](https://github.com/LosYear) - fact checking, editing
- Lera Lesik [@Lera_Lesik](https://twitter.com/Lera_Lesik) - cover image

# Links

- [react-figma](https://github.com/react-figma/react-figma) - A React renderer into Figma
    - [Figma variants support](https://github.com/react-figma/react-figma/releases/tag/v0.1.16) release.
    - [Figma variants support](https://github.com/react-figma/react-figma/pull/354) Pull Request.
- [Bridging design and code with Variants](https://www.figma.com/blog/bridging-design-and-code-with-variants/)
- [Use the Inspect panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel)
- [Creating and organizing Variants](https://www.figma.com/best-practices/creating-and-organizing-variants/)
- [React Renderers: an Overview](https://dev.to/lessmess/react-renderers-an-overview-34f3)
- [Introduction - Figma Developers](https://www.figma.com/plugin-docs/intro/)
