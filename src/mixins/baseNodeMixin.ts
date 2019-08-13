export const baseNodeMixin = (node: BaseNodeMixin) => props => {
    if (props.name) {
        node.name = props.name;
    }
};
