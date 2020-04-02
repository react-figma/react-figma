// @ts-ignore FIXME:
import { Platform } from 'react-primitives';

let styled, ThemeProvider;

import styledW, { ThemeProviderW } from 'styled-components';
import styledP, { ThemeProviderP } from 'styled-components/primitives';

if (Platform.OS === 'figma') {
    styled = styledP;
    ThemeProvider = ThemeProviderP;
} else {
    styled = styledW;
    ThemeProvider = ThemeProviderW;
}

export { ThemeProvider };

export default styled;
