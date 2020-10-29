# Component Variants example

An example of using [Figma Variants](https://help.figma.com/hc/en-us/articles/360055471353-Prepare-for-Variants).

```jsx
<ComponentSet name="Button"  style={styles.setContainer}>
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

Figma Variants visualization:

![Figma Variants](https://user-images.githubusercontent.com/1270648/97575909-7e858800-19fe-11eb-8f44-7d85b0721165.png)

* [Live demo](https://www.figma.com/community/file/903625837057389198/Component-Variants-%2F-react-figma) 
* [How to run](../../contributing.md#running-examples)

