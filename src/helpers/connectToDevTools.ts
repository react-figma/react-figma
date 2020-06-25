import { connectToDevTools as connectToDevToolsInternal } from 'react-devtools-core';

export const connectToDevTools = () => {
    // Try construction is used to avoid crashing if devtools is not launched
    try {
        connectToDevToolsInternal({
            isAppActive: () => true,
            host: 'localhost',
            port: 8097,
            resolveRNStyle: null
        });
    } catch (e) {}
};
