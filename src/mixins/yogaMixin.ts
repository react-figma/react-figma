import { ChildrenProps, LayoutProps } from '../types';
import { messagePromise } from '../helpers/messagePromise';

export const yogaMixin = (node: ChildrenMixin) => async (props: ChildrenProps & LayoutProps) => {
    const result = await messagePromise({
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
    props.width = result.width;
    props.height = result.height;
    props.children.forEach((child: any, id) => {
        const layout = result.children[id];
        if (layout && child.resize) {
            child.x = layout.left;
            child.y = layout.top;
            child.resize(layout.width, layout.height);
        }
    });
};
