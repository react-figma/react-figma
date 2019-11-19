import * as Reconciler from 'react-reconciler';
import { APIBridge, APIBridgeComponent } from './APIBridge';
import { propsDiff, shallowDiff, ReconcilerMethodNotImplemented } from './utils';

export const render = async (jsx: any, rootNode) => {
    const apiBridge = new APIBridge();

    // TODO:
    // - HYDRATION
    const HostConfig = {
        now: Date.now,
        supportsMutation: true,

        // For now, no hydration supported
        supportsHydration: false,

        getRootHostContext: () => {},
        prepareForCommit: () => {},
        resetAfterCommit: () => {},
        getChildHostContext: () => {},
        shouldSetTextContent: () => false,
        getPublicInstance: instance => instance,

        createInstance: (type: string, props) => {
            const { children, ...pureProps } = props;

            return apiBridge.createInstance(type, pureProps);
        },

        appendChildToContainer: () => {
            // Not implemented since we don't have actual container node
            // TODO: implement page support
        },
        insertInContainerBefore: () => {
            throw new ReconcilerMethodNotImplemented('insertInContainerBefore is not implemented');
        },
        removeChildFromContainer: () => {
            throw new ReconcilerMethodNotImplemented('removeChildFromContainer is not implemented');
        },

        finalizeInitialChildren: () => false,
        appendInitialChild: (parent: APIBridgeComponent, child: APIBridgeComponent) => {
            apiBridge.appendChild(parent, child);
        },
        appendChild: (parent: APIBridgeComponent, child: APIBridgeComponent) => {
            apiBridge.appendChild(parent, child);
        },
        removeChild: (parent: APIBridgeComponent, child: APIBridgeComponent) => {
            apiBridge.removeChild(child);
        },
        insertBefore(parent: APIBridgeComponent, child: APIBridgeComponent, beforeChild: APIBridgeComponent) {
            apiBridge.insertBefore(parent, child, beforeChild);
        },

        prepareUpdate: (instance: APIBridgeComponent, type: string, oldProps, newProps): Array<string> => {
            return shallowDiff(oldProps, newProps);
        },
        commitUpdate: (
            instance: APIBridgeComponent,
            updatePayload: Array<string>,
            type: string,
            oldProps,
            newProps
        ) => {
            const [shouldUpdate, diff] = propsDiff(oldProps, newProps, updatePayload);

            if (shouldUpdate) {
                apiBridge.commitUpdate(type, instance, diff);
            }
        },

        createTextInstance: (text: string) => {
            return apiBridge.createTextInstance(text);
        },
        commitTextUpdate: (textInstance: APIBridgeComponent, oldText: string, newText: string) => {
            apiBridge.commitTextUpdate(textInstance, newText);
        },
        resetTextContent: () => {}
    };

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
