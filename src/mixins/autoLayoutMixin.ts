import { AutoLayoutProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const autoLayoutMixin = propsAssign<AutoLayoutProps, AutoLayoutProps>(
    ['layoutMode', 'counterAxisSizingMode', 'horizontalPadding', 'verticalPadding', 'itemSpacing', 'constraints'],
    {
        layoutMode: 'NONE',
        counterAxisSizingMode: 'AUTO',
        horizontalPadding: 0,
        verticalPadding: 0,
        itemSpacing: 0,
        constraints: {
            horizontal: 'MIN',
            vertical: 'MIN'
        }
    }
);
