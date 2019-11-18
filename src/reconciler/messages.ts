type APIBridgeMessageType = 'createInstance';

interface APIBridgeMessage {
    readonly type: APIBridgeMessageType;
    readonly options?: any;
}
