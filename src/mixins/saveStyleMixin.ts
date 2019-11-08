export const saveStyleMixin = node => props => {
    node.setPluginData('reactStyle', JSON.stringify(props.style || {}));
};
