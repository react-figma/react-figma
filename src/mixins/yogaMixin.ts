import { ChildrenProps, LayoutProps } from '../types';

export const yogaMixin = (node: ChildrenMixin) => (props: ChildrenProps & LayoutProps) => {
    figma.ui.postMessage({
        type: 'calculateLayout',
        value: {
            width: props.width,
            height: props.height,
            children: props.children.map((child: any) => ({
                width: child.width,
                height: child.height
            }))
        }
    });
};
