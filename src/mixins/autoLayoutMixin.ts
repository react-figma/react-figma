import { AutoLayoutProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const autoLayoutMixin = propsAssign<AutoLayoutProps>([
    'layoutMode',
    'counterAxisSizingMode',
    'horizontalPadding',
    'verticalPadding',
    'itemSpacing',
    'constraints'
]);
