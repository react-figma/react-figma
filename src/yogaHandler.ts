import { ChildrenProps, LayoutProps } from './types';
import { messagePromise } from './helpers/messagePromise';

export const yogaHandler = async (node, props) => {
    const result = await messagePromise({
        type: 'calculateLayout',
        value: {
            width: props.width,
            height: props.height,
            style: props.style,
            children: node.children.map((child: any) => ({
                width: child.width,
                height: child.height,
                style:
                    (child.getPluginData &&
                        child.getPluginData('reactStyle') &&
                        JSON.parse(child.getPluginData('reactStyle'))) ||
                    undefined
            }))
        }
    });
    return {
        width: result.width,
        height: result.height,
        children: node.children.map((child: any, id) => {
            const layout = result.children[id];
            return {
                x: layout.left,
                y: layout.top,
                width: layout.width,
                height: layout.height
            };
        })
    };
};
