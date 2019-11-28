import { UIToPluginMessagePromise } from '../helpers/messagePromise';
import { APIBridgeComponent } from '../reconciler/APIBridgeComponent';
import { yogaWorker } from './yogaWorker';

const transformYogaToCoords = result => {
    return {
        x: result.left,
        y: result.top,
        width: result.width,
        height: result.height,
        children: result.children && result.children.map(transformYogaToCoords)
    };
};

export const yogaHandler = async (node: APIBridgeComponent) => {
    const { tree } = await UIToPluginMessagePromise({
        type: 'sendYogaSubtree',
        tag: node.tag
    });

    const result = yogaWorker(tree);
    return transformYogaToCoords(result);
};
