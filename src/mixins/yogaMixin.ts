const yoga = require('yoga-layout');
import { ChildrenProps, LayoutProps } from '../types';

export const yogaMixin = (node: ChildrenMixin) => (props: ChildrenProps & LayoutProps) => {
    debugger;
    const yogaRoot = yoga.Node.create();
    yogaRoot.setWidth(props.width);
    yogaRoot.setHeight(props.height);
    yogaRoot.setJustifyContent(yoga.JUSTIFY_CENTER);

    if (props.children) {
        const yogaNodes = props.children.map((child: any, id) => {
            const yogaNode = yoga.Node.create();
            if (child.width && child.height) {
                yogaNode.setWidth(child.width);
                yogaNode.setHeight(child.height);
            }
            yogaRoot.insertChild(yogaNode, id);
            return yogaNode;
        });

        yogaRoot.calculateLayout(props.width, props.height, yoga.DIRECTION_LTR);

        props.children.forEach((child: any, id) => {
            const yogaNode = yogaNodes[id];
            const layoutProps = yogaNode.getComputedLayout();
            child.x = layoutProps.left;
            child.y = layoutProps.top;
            child.resize(layoutProps.width, layoutProps.height);
        });
    }
};
