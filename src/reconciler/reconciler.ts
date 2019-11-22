import * as Reconciler from 'react-reconciler';
import { APIBridge, APIBridgeComponent, TBridgeFigmaTreeNode } from './APIBridge';
import { propsDiff, shallowDiff, ReconcilerMethodNotImplemented } from './utils';

export const render = async (jsx: any, rootNode) => {
    const apiBridge = new APIBridge();
    await apiBridge.fetchDocumentTree();

    const HostConfig = {
        now: Date.now,
        supportsMutation: true,
        supportsHydration: true,

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

        appendChildToContainer: (container, child: APIBridgeComponent) => {
            apiBridge.appendChildToRoot(child);
        },
        insertInContainerBefore: (container, child: APIBridgeComponent, beforeChild: APIBridgeComponent) => {
            apiBridge.insertInRootBefore(child, beforeChild);
        },
        removeChildFromContainer: (container, instance: APIBridgeComponent) => {
            apiBridge.removeChild(instance);
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
        resetTextContent: () => {},

        // Hydration
        didNotFindHydratableInstance: () => {},
        didNotHydrateContainerInstance: () => {},
        didNotFindHydratableContainerInstance: () => {},
        didNotFindHydratableTextInstance: () => {},
        didNotHydrateInstance: () => {},
        commitHydratedContainer: () => {},
        commitMount: () => {},

        getFirstHydratableChild: (parent: TBridgeFigmaTreeNode | null) => {
            // TODO: it's a tricky but we assume that if no parent passed
            //  then we have to hydrate starting from documentRoot,
            //  main con of it: we can't hydrate anything that is not wrapped within <Page> component
            const treeNode = parent || apiBridge.figmaTree;
            if (!treeNode || !treeNode.children || treeNode.children.length === 0) {
                return null;
            }
            return treeNode.children[0];
        },
        canHydrateInstance: (instance: TBridgeFigmaTreeNode, type: string) => {
            return instance.type.toLowerCase() === type ? instance : null;
        },
        getNextHydratableSibling: (instance: TBridgeFigmaTreeNode) => {
            if (!instance || !instance.parent) {
                return null;
            }

            const parent = instance.parent;
            const instanceIndex = parent.children.indexOf(instance);
            const successors = parent.children.slice(instanceIndex + 1);

            if (successors.length > 0) {
                return successors[0];
            }

            return null;
        },
        hydrateInstance: (instance: TBridgeFigmaTreeNode, type: string, props) => {
            return shallowDiff({}, props);
        }
    };

    const reconciler = Reconciler(HostConfig);

    reconciler.injectIntoDevTools({
        bundleType: 1, // 0 for PROD, 1 for DEV
        version: '0.1.0',
        rendererPackageName: 'react-figma'
    });

    const container = reconciler.createContainer(
        rootNode, // container
        false, // isAsync
        true // hydrate
    );
    reconciler.updateContainer(jsx, container);
    return container;
};
