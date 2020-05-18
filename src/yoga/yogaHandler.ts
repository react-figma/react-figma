import { yogaWorker } from '../workers/yogaWorker';
import * as yoga from 'yoga-layout-prebuilt';

const transformYogaToCoords = result => {
    return {
        x: result.left,
        y: result.top,
        width: result.width,
        height: result.height,
        children: result.children && result.children.map(transformYogaToCoords),
        nodeBatchId: result.nodeBatchId,
        reactId: result.reactId
    };
};

export const yogaHandler = node => {
    const result = yogaWorker(yoga)(node);
    return transformYogaToCoords(result);
};
