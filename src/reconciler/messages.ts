export type APIBridgeMessageType = 'createInstance' | 'appendChild' | 'commitUpdate' | 'removeChild' | 'insertBefore';

export interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
