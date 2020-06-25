# Basic Animation example

Example of Basic Animation within Figma using [Spring](https://www.react-spring.io/docs/props/spring) and the `onSelectionEnter` and `onSelectionLeave` handlers

<img width="387" alt="Basic Animation of a Pink Recangle moving across the screen" src="https://media.giphy.com/media/RkcU6vJLmIloTKfzJv/giphy.gif">

### Code

```javascript
import * as React from 'react';
import { Page, View } from 'react-figma';
import { Spring } from 'react-spring/renderprops-universal';

export const App = () => {
    const [clicked, setClicked] = React.useState(false); //Set state
    return (
        <Page name="New page" isCurrent>
            <Spring
                to={{
                    left: clicked ? 0 : 500, //Set values that should be animated
                }}>
                {(props) => (
                    <View
                        style={[{ backgroundColor: '#ff00ff' }, props]} //Add props to component
                        onSelectionEnter={() => {
                            setClicked(!clicked); // Click!
                        }}
                        onSelectionLeave={() => {
                            setClicked(!clicked); //Clack!
                        }}></View>
                )}
            </Spring>
        </Page>
    );
};
```

[How to run](../../contributing.md#running-examples)
