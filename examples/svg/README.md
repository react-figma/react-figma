# Groups example

The app that rendered nested groups.

```javascript
<Page name="New page">
    <Group name="1">
        <Rectangle name="1.1" style={{ width: 200, height: 100, backgroundColor: '#f24e1e' }} />
    </Group>
    <Rectangle name="2" style={{ width: 200, height: 100, backgroundColor: '#ff7262' }} />
    <Group name="3">
        <Group name="3.1">
            <Rectangle name="3.1.1" style={{ width: 200, height: 100, backgroundColor: '#a259ff' }} />
            <Rectangle name="3.1.2" style={{ width: 200, height: 100, backgroundColor: '#1abcfe' }} />
        </Group>
        <Rectangle name="3.2" style={{ width: 200, height: 100, backgroundColor: '#0000ff' }} />
        <Group name="3.3">
            <Rectangle name="3.3.1" style={{ width: 200, height: 100, backgroundColor: '#0acf83' }} />
            <Rectangle name="3.3.2" style={{ width: 200, height: 100, backgroundColor: '#ffffff' }} />
        </Group>
    </Group>
</Page>
```

<iframe style="border: none;" width="770" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FlIfHwFDyu5Cqjy7vmr8sOn%2FFigma-Groups%3Fnode-id%3D43%253A9" allowfullscreen></iframe>

* [Live demo](https://www.figma.com/file/lIfHwFDyu5Cqjy7vmr8sOn/Figma-Groups?node-id=43%3A9) 
* [How to run](../../contributing.md#running-examples)

