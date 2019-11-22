export type APIBridgeMessageType =
    | 'createInstance'
    | 'appendChild'
    | 'commitUpdate'
    | 'removeChild'
    | 'insertBefore'
    | 'createTextInstance'
    | 'commitTextUpdate'
    | 'fetchDocumentTree';

export interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
