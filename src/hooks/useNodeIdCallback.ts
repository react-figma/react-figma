import * as React from 'react';
import { $bindReactIdWithNodeId } from '../rpc';

export const useNodeIdCallback = (nodeRef: { current?: any }, onNodeId: (nodeId: string) => void) => {
    React.useEffect(() => {
        const instance = nodeRef.current;
        const handler = ([reactId, nodeId]: [string, string]) => {
            if (onNodeId && instance && instance.reactId === reactId) {
                onNodeId(nodeId);
            }
        };

        const subscription = $bindReactIdWithNodeId.subscribe(value => handler && handler(value));

        return () => subscription.unsubscribe();
    }, [onNodeId]);
};
