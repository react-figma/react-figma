import { LayoutProps } from '../types';

export const layoutMixin = (node: LayoutMixin & BaseNode) => (props: LayoutProps) => {
    if (props.relativeTransform) {
        node.relativeTransform = props.relativeTransform;
    }
    if (typeof props.x === 'number') {
        node.x = props.x;
    }
    if (typeof props.y === 'number') {
        node.y = props.y;
    }
    if (typeof props.rotation === 'number') {
        node.rotation = props.rotation;
    }
    if (typeof props.width === 'number' && typeof props.height === 'number' && node.type !== 'LINE') {
        if (props.isWithoutConstraints) {
            node.resizeWithoutConstraints(props.width, props.height);
        } else {
            node.resize(props.width, props.height);
        }
    }

    if (typeof props.width === 'number' && node.type === 'LINE') {
        if (props.isWithoutConstraints) {
            node.resizeWithoutConstraints(props.width, 0);
        } else {
            node.resize(props.width, 0);
        }
    }
};
