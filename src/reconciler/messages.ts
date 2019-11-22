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
    | 'fetchDocumentTree';

export interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
