import { connectToDevTools as connectToDevToolsInternal } from 'react-devtools-core';
import { api } from '../rpc';

export const connectToDevTools = () => {
    let connectionFailed = false;
    const connection = new WebSocket('ws://localhost:8097');

    connectToDevToolsInternal({
        // prevents from multiple retries
        isAppActive: () => !connectionFailed,
        resolveRNStyle: null,
        websocket: connection
    });

    connection.onerror = () => {
        console.warn('React DevTools is not running. Please run React DevTools or remove `connectToDevTools` call');
        connectionFailed = true;
    };

    // @ts-ignore
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on('react-devtools', agent => {
        agent._bridge.addListener('inspectElement', data => {
            const { rendererID, id } = data;

            const renderer = agent.rendererInterfaces[rendererID];

            let nodes = null;
            if (renderer !== null) {
                nodes = renderer.findNativeNodesForFiberID(id);
            }

            if (nodes !== null && nodes[0]) {
                api.highlightNativeElement(nodes[0]);
            }
        });
    });
};
