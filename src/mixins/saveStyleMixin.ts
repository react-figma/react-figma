export const saveStyleMixin = node => props => {
    if (props.style) {
        node.setPluginData('reactStyle', JSON.stringify(props.style));
    }
};
