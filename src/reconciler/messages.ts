export type APIBridgeMessageType =
    | 'createInstance'
    | 'appendChild'
    | 'commitUpdate'
    | 'removeChild'
    | 'insertBefore'
    | 'createTextInstance'
    | 'commitTextUpdate';

export interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
