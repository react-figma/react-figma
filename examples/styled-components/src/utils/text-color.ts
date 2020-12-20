import * as chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it
const textColor = hex => {
    const vsWhite = chroma.contrast(hex, 'white');
    if (vsWhite > 4) {
        return '#FFF';
    }
    return chroma(hex)
        .darken(3)
        .hex();
};

export default textColor;
