import { BaseNodeProps } from '../types';

export const baseNodeMixin = (node: BaseNodeMixin) => (props: BaseNodeProps) => {
    if (props.name) {
        node.name = props.name;
    }

    if (props.pluginData) {
        Object.keys(props.pluginData).forEach(key => {
            node.setPluginData(key, props.pluginData[key]);
        });
    }

    if (props.sharedPluginData) {
        Object.keys(props.sharedPluginData).forEach(namespace => {
            Object.keys(props.sharedPluginData[namespace]).forEach(key => {
                node.setSharedPluginData(namespace, key, props.pluginData[key]);
            });
        });
    }
};
