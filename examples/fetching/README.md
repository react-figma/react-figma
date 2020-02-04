# Interaction example

The app that rendered checkbox and handles the `onSelectionEnter`, `onSelectionLeave` events.

Demo:

<p align="center"><img src="https://media.giphy.com/media/j2Rh9Ww5nKvwowB5gi/giphy.gif" width="480"></p>

Code example:

```javascript
const [checked, setChecked] = React.useState(false);
...
<Frame style={styles.frame}>                                                                   
    <Checkbox                                                                                  
        checked={checked}                                                                      
        label="select me"                                                                      
        onSelectionEnter={() => setChecked(true)}                                              
        onSelectionLeave={() => setChecked(false)}                                             
    />                                                                                         
    <Text style={styles.text}>{checked ? 'Checkbox selected' : 'Checkbox not selected'}</Text> 
    <Text style={styles.text}>{`Counter: ${counter}`}</Text>                                   
</Frame>                                                                                         
```

[How to run](../../contributing.md#running-examples)

