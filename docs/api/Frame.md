---
id: frame
title: Frame
---

Wrapper for Figma [Frame](https://www.figma.com/plugin-docs/api/FrameNode/).

#### Props

| Prop       | Type     | Default | Note                                              |
| ---------- | -------- | ------- | ------------------------------------------------- |
| `name`     | `String` |         | The name to be displayed in the Figma Layers List |
| `children` | `Node`   |         |                                                   |
| `preset`   | `Preset` |         |                                                   |
| `style`    | [`Style`](/docs/styling)   |         | Not all props                |
| `onSelectionEnter` | `Function` |  | Selection enter event callback  |
| `onSelectionLeave` | `Function` |  | Selection leave event callback  |

Also, most of [FrameNode](https://www.figma.com/plugin-docs/api/FrameNode/) fields supported as props.

#### Presets

Preset is an object, that contains `Frame` props:

| Prop       | Type     |
| ---------- | -------- |
| `name`     | `String` |
| `width`    | `Number` |
| `height`   | `Number` |

Predefined presets can be used:

```javascript
import {Frame, FRAME_PRESETS} from "react-figma";
...
<Frame preset={FRAME_PRESETS.iPhoneX}>
    ...
</Frame>
```

List of presets:

| Key              | Name           | Width    | Height   | 
| ---------------- | -------------- | -------- | -------- | 
| `iPhoneX`        | iPhone X       | 375      | 812      |
| `iPhone8Plus`    | iPhone 8 Plus  | 414      | 736      |
| `iPhone8`        | iPhone 8       | 375      | 667      |
| `iPhoneSE`       | iPhone SE      | 320      | 568      |
| `googlePixel2`   | Google Pixel 2 | 411      | 731      |
| `googlePixel2XL` | Google Pixel 2 XL | 411   | 823      |
| `android`        | Android        | 360      | 640      |
| `'iPadMini/9.7'` | iPad Mini / 9.7| 768      | 974      |
| `'iPadPro10.5'`  | iPad Pro 10.5  | 834      | 1112     |
| `'iPadPro12.9'`  | iPad Pro 12.9  | 1024     | 1366     |
| `surfacePro3`    | Surface Pro 3  | 1440     | 990      |
| `surfacePro4`    | Surface Pro 4  | 1368     | 912      |
| `desktop`        | Desktop        | 1440     | 1024     |
| `macbook`        | Macbook        | 1152     | 700      |
| `macbookPro`     | Macbook Pro    | 1440     | 900      |
| `surfaceBook`    | Surface Book   | 1500     | 1000     |
| `iMac`           | iMac           | 1280     | 720      |
| `appleWatch42mm` | Apple Watch 42mm | 156     | 195     |
| `appleWatch38mm` | Apple Watch 38mm | 136     | 170     |
| `a4`             | A4             | 595      | 842      |
| `a5`             | A5             | 420      | 595      |
| `a6`             | A6             | 297      | 420      |
| `letter`         | Letter         | 612      | 792      |
| `tabloid`        | Tabloid        | 792      | 1224     |
| `twitterPost`    | Twitter Post   | 1012     | 506      |
| `twitterHeader`  | Twitter Header | 1500     | 500      |
| `facebookPost`   | Facebook Post  | 1200     | 630      |
| `facebookCover`  | Facebook Cover | 820      | 312      |
| `instagramPost`  | Instagram Post | 1080     | 1080     |
| `instagramStory` | Instagram Story| 1080     | 1920     |
| `dribbbleShot`   | Dribbble Shot  | 400      | 300      |
| `dribbbleShotHD` | Dribbble Shot HD | 800      | 600      |
| `linkedInCover`  | LinkedIn Cover | 1584     | 396      |

#### Example

```javascript
<Frame name="List">
  <Text>Hello world!</Text>
</Component>
```
