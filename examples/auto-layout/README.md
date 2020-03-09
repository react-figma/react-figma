# Auto-layout example

Example of usage Figma auto-layout instead of yoga-layout.

<img width="387" alt="Screenshot 2020-03-09 at 23 44 44" src="https://user-images.githubusercontent.com/1270648/76255897-05170a80-6260-11ea-977f-193444fb59ba.png">

### Code

```javascript
<View
    layoutMode="VERTICAL"
    horizontalPadding={20}
    verticalPadding={20}
    itemSpacing={10}
    style={{
        backgroundColor: '#ffffff',
        width: 200
    }}>
    <View style={{ height: 40, backgroundColor: '#ffaa97' }} layoutMode="HORIZONTAL" layoutAlign="STRETCH" />
    <View style={{ height: 40, backgroundColor: '#ffaa97' }} layoutMode="HORIZONTAL" layoutAlign="STRETCH" />
    <View style={{ height: 40, backgroundColor: '#ffaa97' }} layoutMode="HORIZONTAL" layoutAlign="STRETCH" />
</View>                                                                                       
```

[How to run](../../contributing.md#running-examples)

