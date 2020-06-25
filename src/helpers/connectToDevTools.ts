import { connectToDevTools as connectToDevToolsInternal } from 'react-devtools-core';

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
};
