import * as Reconciler from 'react-reconciler';

export const render = async (jsx: any, rootNode) => {
    const HostConfig = {};

    const reconciler = Reconciler(HostConfig);

    reconciler.injectIntoDevTools({
        bundleType: 1, // 0 for PROD, 1 for DEV
        version: '0.1.0',
        rendererPackageName: 'react-figma'
    });

    const container = reconciler.createContainer(
        rootNode, // container
        true, // isAsync
        true // hydrate
    );

    reconciler.updateContainer(jsx, container);

    return container;
};
