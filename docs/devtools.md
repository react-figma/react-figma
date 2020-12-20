---
id: devtools
title: React DevTools
---

With react-figma it is possible to use [React DevTools](https://github.com/facebook/react/tree/master/packages/react-devtools) electron app.

1. If you don't have React DevTools app installed follow steps from [Installation](https://github.com/facebook/react/tree/master/packages/react-devtools#installation) section

2. In your `src/ui.tsx` import `connectToDevTools` helper:

```ts
import { render, connectToDevTools } from 'react-figma';
```

3. Call `connectToDevTools` function right before your `render` function:

```tsx
connectToDevTools();

render(<App />);
```
