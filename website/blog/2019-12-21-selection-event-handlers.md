---
title: Selection event handlers
author: Ilya Lesik
authorURL: http://twitter.com/ilialesik
---

Selection event handlers has supported at react-figma. 

Demo:

<p align="center"><img src="https://media.giphy.com/media/j2Rh9Ww5nKvwowB5gi/giphy.gif" width="480" /></p>

Code example:

```jsx
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

[Example](https://github.com/react-figma/react-figma/tree/master/examples/interactive)
