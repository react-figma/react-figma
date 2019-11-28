import { LayoutProps } from '../types';

export const layoutMixin = (node: LayoutMixin & BaseNode) => (props: LayoutProps) => {
    if (props.relativeTransform) {
        node.relativeTransform = props.relativeTransform;
    }
    if (props.x) {
        node.x = props.x;
    }
    if (props.y) {
        node.y = props.y;
    }
    if (props.rotation) {
        node.rotation = props.rotation;
    }
    if (props.width && props.height && node.type !== 'LINE') {
        if (props.isWithoutConstraints) {
            node.resizeWithoutConstraints(props.width, props.height);
        } else {
            node.resize(props.width, props.height);
        }
    }

    if (props.width && node.type === 'LINE') {
        if (props.isWithoutConstraints) {
            node.resizeWithoutConstraints(props.width, 0);
        } else {
            node.resize(props.width, 0);
        }
    }
};
