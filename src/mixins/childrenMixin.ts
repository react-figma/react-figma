import { ChildrenProps } from '../types';

export const childrenMixin = (node: ChildrenMixin) => (props: ChildrenProps) => {
    if (props.children) {
        props.children.forEach(child => {
            node.appendChild(child);
        });
    }
};
