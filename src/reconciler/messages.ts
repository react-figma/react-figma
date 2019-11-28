export type APIBridgeMessageType =
    | 'createInstance'
    | 'appendChild'
    | 'appendChildToRoot'
    | 'commitUpdate'
    | 'removeChild'
    | 'insertBefore'
    | 'insertInRootBefore'
    | 'createTextInstance'
    | 'commitTextUpdate'
    | 'syncDocumentTree'
    | 'sendYogaSubtree';

export interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
