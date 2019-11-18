export type APIBridgeMessageType = 'createInstance';

export interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
