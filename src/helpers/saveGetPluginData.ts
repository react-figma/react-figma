export const saveGetPluginData = (key: string) => (node: BaseNodeMixin | undefined): string | void => {
    if (!node || node.removed || !node.getPluginData) {
        return;
    }
    return node.getPluginData(key);
};
