import { AutoLayoutProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const autoLayoutAssign = propsAssign<AutoLayoutProps, AutoLayoutProps>(
    [
        'layoutMode',
        'primaryAxisSizingMode',
        'counterAxisSizingMode',
        'primaryAxisAlignItems',
        'counterAxisAlignItems',
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'itemSpacing',
        'constraints'
    ],
    {
        layoutMode: 'NONE',
        counterAxisSizingMode: 'AUTO',
        itemSpacing: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        constraints: {
            horizontal: 'MIN',
            vertical: 'MIN'
        }
    }
);

const transformPaddings = (props: AutoLayoutProps): AutoLayoutProps => {
    return {
        ...(props.horizontalPadding
            ? { paddingLeft: props.horizontalPadding, paddingRight: props.horizontalPadding }
            : {}),
        ...(props.verticalPadding ? { paddingTop: props.verticalPadding, paddingBottom: props.verticalPadding } : {}),
        ...props
    };
};

export const autoLayoutMixin = node => props => {
    return autoLayoutAssign(node)(transformPaddings(props));
};
