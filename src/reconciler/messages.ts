export type APIBridgeMessageType = 'createInstance' | 'appendChild' | 'commitUpdate' | 'removeChild';

export interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
