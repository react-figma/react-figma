# Auto-layout example

Example of usage Figma auto-layout instead of yoga-layout.

<img width="387" alt="Screenshot 2020-03-09 at 23 44 44" src="https://user-images.githubusercontent.com/1270648/76255897-05170a80-6260-11ea-977f-193444fb59ba.png">

### Code

```javascript
<View
    layoutMode="VERTICAL"
    paddingLeft={20}
    paddingRight={20}
    paddingTop={20}
    paddingBottom={20}
    itemSpacing={10}
    style={{
        backgroundColor: '#ffffff',
        width: 200
    }}>
    <View
        style={{ height: 40, backgroundColor: '#ffaa97' }}
        layoutAlign="STRETCH"
    />
    <View
        style={{ height: 40, backgroundColor: '#ffaa97', marginTop: 10 }}
        layoutAlign="STRETCH"
    />
    <View
        style={{ width: 80, height: 40, backgroundColor: '#ffaa97', marginTop: 10 }}
    />
</View>                                                                                    
```

[How to run](../../contributing.md#running-examples)

